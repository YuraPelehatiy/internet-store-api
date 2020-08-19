import * as commonSchemas from '../common/schemas';

const token = {
  type: 'string',
};

const userProperties = {
  id: { type: 'string' },
  email: { type: 'string' },
  firstName: { type: 'string' },
  lastName: { type: 'string' },
  role: { type: 'string' },
  ...commonSchemas.timestamps,
};

export const userWithToken = {
  type: 'object',
  properties: {
    token,
    user: {
      type: 'object',
      properties: userProperties,
    },
  },
};
