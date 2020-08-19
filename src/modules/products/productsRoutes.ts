import { FastifyInstance } from 'fastify';
import * as handlers from './productsHandlers';
import * as routesSchemas from './productsRoutesSchemas';
import * as authHelpers from '../auth/authHelpers';

export async function productsRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/products',
    { schema: routesSchemas.getProducts },
    handlers.getProducts,
  );
  fastify.get(
    '/products/:id',
    { schema: routesSchemas.getProductById },
    handlers.getProductById,
  );
  fastify.delete(
    '/products/:id',
    {
      schema: routesSchemas.removeProductById,
      onRequest: authHelpers.requiredAdminPermission,
    },
    handlers.removeProductById,
  );
  fastify.patch(
    '/products/:id',
    {
      schema: routesSchemas.updateProductById,
      onRequest: authHelpers.requiredAdminPermission,
    },
    handlers.updateProductById,
  );
  fastify.post(
    '/products',
    {
      schema: routesSchemas.createProduct,
      onRequest: authHelpers.requiredAdminPermission,
    },
    handlers.createProduct,
  );
}
