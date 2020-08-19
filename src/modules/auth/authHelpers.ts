import { FastifyRequest, FastifyReply } from 'fastify';
import * as usersDb from '../users/usersDb';

export interface UserAuth {
  userId: string;
  iat: string;
}

export async function requiredAuth(req: FastifyRequest) {
  return req.jwtVerify();
}

export async function requiredAdminPermission(
  req: FastifyRequest,
  res: FastifyReply<any>,
) {
  try {
    const { userId } = await req.jwtVerify<UserAuth>();

    const [user]: usersDb.User[] = await usersDb.getUserById(userId);

    if (user.role !== 'admin') {
      throw new Error('Permission denied');
    }
  } catch (error) {
    res.code(403).send({ message: 'Permission denied' });
  }
}
