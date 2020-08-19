import { timestamps } from '../common/schemas';

const userProperties = {
  email: { type: 'string' },
  firstName: { type: 'string' },
  lastName: { type: 'string' },
  role: { type: 'string' },
};

export const user = {
  title: 'User',
  type: 'object',
  properties: {
    id: { type: 'string' },
    ...userProperties,
    ...timestamps,
  },
};

export const userPath = {
  title: 'User path',
  type: 'object',
  properties: userProperties,
};
