import * as schemas from './authSchemas';

export const login = {
  tags: ['auth'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'password'],
  },
  response: {
    200: schemas.userWithToken,
  },
  description: 'Login',
};

export const register = {
  tags: ['auth'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
    },
    required: ['email', 'password', 'firstName', 'lastName'],
  },
  response: {
    200: schemas.userWithToken,
  },
  description: 'Register',
};
