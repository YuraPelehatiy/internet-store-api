import { FastifyInstance } from 'fastify';
import * as authHelpers from '../auth/authHelpers';
import * as usersHandlers from './usersHandlers';
import * as routesSchemas from './usersRoutesSchemas';

export async function usersRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/users/current',
    {
      schema: routesSchemas.getCurrentUser,
      onRequest: authHelpers.requiredAuth,
    },
    usersHandlers.getCurrentUser,
  );
  fastify.get(
    '/users',
    {
      schema: routesSchemas.getUsers,
      onRequest: authHelpers.requiredAdminPermission,
    },
    usersHandlers.getUsers,
  );
  fastify.get(
    '/users/:id',
    {
      schema: routesSchemas.getUserById,
      onRequest: authHelpers.requiredAdminPermission,
    },
    usersHandlers.getUserById,
  );
  fastify.patch(
    '/users/:id',
    {
      schema: routesSchemas.updateUserById,
      onRequest: authHelpers.requiredAdminPermission,
    },
    usersHandlers.updateUserById,
  );
  fastify.delete(
    '/users/:id',
    {
      schema: routesSchemas.removeUserById,
      onRequest: authHelpers.requiredAdminPermission,
    },
    usersHandlers.removeUserById,
  );
}
