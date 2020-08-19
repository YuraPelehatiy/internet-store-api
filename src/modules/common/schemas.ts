export const success = {
  type: 'object',
  properties: {
    success: {
      type: 'boolean',
    },
  },
};

export const idInParam = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
  },
};

export const idsInQuery = {
  type: 'object',
  properties: {
    ids: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};

export const createdAt = {
  created_at: {
    type: 'string',
  },
};

export const updatedAt = {
  updated_at: {
    type: 'string',
  },
};

export const timestamps = {
  ...createdAt,
  ...updatedAt,
};
