import * as schemas from './productsSchemas';
import * as commonSchemas from '../common/schemas';

export const getProducts = {
  tags: ['products'],
  query: commonSchemas.idsInQuery,
  response: {
    200: {
      type: 'array',
      items: schemas.product,
    },
  },
  description: 'Get products',
};

export const getProductById = {
  tags: ['products'],
  params: commonSchemas.idInParam,
  response: {
    200: schemas.product,
  },
  description: 'Get product by id',
};

export const removeProductById = {
  tags: ['products'],
  params: commonSchemas.idInParam,
  response: {
    200: commonSchemas.success,
  },
  description: 'Remove product by id',
};

export const createProduct = {
  tags: ['products'],
  body: schemas.productPath,
  response: {
    200: schemas.product,
  },
  description: 'Create product',
};

export const updateProductById = {
  tags: ['products'],
  params: commonSchemas.idInParam,
  body: schemas.productPath,
  response: {
    200: schemas.product,
  },
  description: 'Update product by id',
};
