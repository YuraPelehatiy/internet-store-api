import * as schemas from './usersSchemas';
import * as commonSchemas from '../common/schemas';

export const getCurrentUser = {
  tags: ['users'],
  response: {
    200: schemas.user,
  },
  description: 'Get current user',
};

export const getUsers = {
  tags: ['users'],
  response: {
    200: {
      type: 'array',
      items: schemas.user,
    },
  },
  description: 'Get users',
};

export const getUserById = {
  tags: ['users'],
  params: commonSchemas.idInParam,
  response: {
    200: schemas.user,
  },
  description: 'Get user by id',
};

export const removeUserById = {
  tags: ['users'],
  params: commonSchemas.idInParam,
  response: {
    200: commonSchemas.success,
  },
  description: 'Remove user by id',
};

export const createUser = {
  tags: ['users'],
  body: schemas.userPath,
  response: {
    200: schemas.userPath,
  },
  description: 'Create user',
};

export const updateUserById = {
  tags: ['users'],
  params: commonSchemas.idInParam,
  body: schemas.user,
  response: {
    200: schemas.userPath,
  },
  description: 'Update user by id',
};
