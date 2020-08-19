import fastify from 'fastify';
import fastifyOas from 'fastify-oas';
import fastifyJwt from 'fastify-jwt';
import { registerModules } from './modules';
import { swagger } from './swagger';
import { JWT_SECRET } from '../config';

const app = fastify({ logger: true })
  .register(fastifyJwt, { secret: JWT_SECRET })
  .register(fastifyOas, swagger)
  .register(registerModules);

export async function start() {
  try {
    await app.listen(3000);
    app.log.info('server listening on 3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
