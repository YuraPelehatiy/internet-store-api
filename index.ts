import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async () => {
  return { hello: 'world test' };
});

async function start() {
  try {
    await app.listen(3000);
    app.log.info('server listening on 3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
