import { FastifyReply, FastifyRequest } from 'fastify';
import { UserAuth } from '../auth/authHelpers';
import * as db from './usersDb';

export async function getCurrentUser(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const { userId } = await req.jwtVerify<UserAuth>();

    const [user]: db.User[] = await db.getUserById(userId);

    res.send(user);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function getUsers(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const users: db.User[] = await db.getUsers();

    res.send(users);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function getUserById(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const id: string = req.params.id;

    const [user]: db.User[] = await db.getUserById(id);

    res.send(user);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function removeUserById(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const id: string = req.params.id;

    await db.removeUserById(id);

    res.send({ success: true });
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}

export async function updateUserById(
  req: FastifyRequest<any>,
  res: FastifyReply<any>,
) {
  try {
    const id: string = req.params.id;
    const path: db.UserPatch = req.body;

    const [user]: db.User[] = await db.updateUserById(id, path);

    res.send(user);
  } catch (err) {
    res.status(500).send({
      errorMessage: 'Something went wrong',
      internalError: err.message,
    });
  }
}
