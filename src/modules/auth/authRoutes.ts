import { FastifyInstance } from 'fastify';
import * as authHandlers from './authHandlers';
import * as authRoutesSchemas from './authRoutesSchemas';

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    { schema: authRoutesSchemas.login },
    authHandlers.login,
  );
  fastify.post(
    '/register',
    { schema: authRoutesSchemas.register },
    authHandlers.register,
  );
}
