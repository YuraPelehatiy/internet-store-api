import { timestamps } from '../common/schemas';

const productProperties = {
  title: { type: 'string' },
  description: { type: 'string' },
  image: {
    type: 'string',
  },
  price: { type: 'number' },
};

export const productPath = {
  title: 'Product path',
  type: 'object',
  properties: productProperties,
};

export const product = {
  title: 'Product',
  type: 'object',
  properties: {
    id: { type: 'string' },
    ...productProperties,
    ...timestamps,
  },
};

export const productPathRequired = {
  ...productPath,
  required: ['title', 'description', 'image', 'price'],
};
