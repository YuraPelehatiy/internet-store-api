import {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from 'fastify';
import bcrypt from 'bcrypt';
import * as db from '../users/usersDb';
import * as passwordDb from '../password/passwordDb';

interface LoginParams {
  email: string;
  password: string;
}

export async function login(
  this: FastifyInstance,
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const params: LoginParams = req.body;

    const [user] = await db.findUser({ email: params.email });

    if (!user) {
      throw new Error('Wrong password or email');
    }

    const [passwordEntry] = await passwordDb.findUserPassword({
      userId: user.id,
    });

    const match = await bcrypt.compare(
      params.password,
      passwordEntry.hash,
    );

    if (!match) {
      throw new Error('Wrong password or email');
    }

    const token = this.jwt.sign({
      userId: user.id,
      iat: Date.now(),
    });

    res.send({ token, user });
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function register(
  this: FastifyInstance,
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const params: db.CreateUserParams = req.body;

    const users: db.User[] = await db.findUser({
      email: params.email,
    });

    if (users.length > 0) {
      throw new Error('User already exist');
    }

    const passwordHash = await bcrypt.hash(params.password, 10);

    const [user]: db.User[] = await db.createUser({
      email: params.email,
      firstName: params.firstName,
      lastName: params.lastName,
    });

    await passwordDb.createPassword({
      userId: user.id,
      hash: passwordHash,
    });

    const token = this.jwt.sign({
      userId: user.id,
      iat: Date.now(),
    });

    res.send({ user, token });
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
