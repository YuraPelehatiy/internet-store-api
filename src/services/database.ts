import knex from 'knex';
import { CONFIG_DB } from '../../config';

const config: knex.Config = CONFIG_DB.production;

const client = knex(config);

export { client };
