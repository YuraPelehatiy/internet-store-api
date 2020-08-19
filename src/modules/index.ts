import { FastifyInstance } from 'fastify';
import { productsRoutes } from './products/productsRoutes';
import { authRoutes } from './auth/authRoutes';
import { usersRoutes } from './users/usersRoutes';

const options = {
  prefix: '/api/v1',
};

export async function registerModules(fastify: FastifyInstance) {
  fastify.register(authRoutes, options);
  fastify.register(productsRoutes, options);
  fastify.register(usersRoutes, options);
}
