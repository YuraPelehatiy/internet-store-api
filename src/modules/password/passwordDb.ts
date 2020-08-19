import { client } from '../../services/database';
import { Timestamps } from '../../types/types';

export interface FindPasswordParams {
  userId: string;
}

export interface CreatePasswordEntryParams
  extends FindPasswordParams {
  hash: string;
}

export interface PasswordEntry
  extends CreatePasswordEntryParams,
    Timestamps {
  id: string;
}

export function findUserPassword(params: FindPasswordParams) {
  return client('passwords')
    .where({ userId: params.userId })
    .select();
}

export function createPassword(params: CreatePasswordEntryParams) {
  return client('passwords').insert(params);
}
