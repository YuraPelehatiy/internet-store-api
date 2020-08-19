
export const swagger = {
  swagger: {
    info: {
      title: 'Internet store api',
      description: 'Internet store api',
      version: '0.1.0',
    },
    servers: [{ url: 'http://localhost:3000' }],
    consumes: ['application/json'],
    produces: ['application/json'],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  exposeRoute: true,
};
