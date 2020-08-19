import { client } from '../../services/database';
import { Timestamps } from '../../types/types';

export type Role = 'user' | 'admin';

export interface User extends Timestamps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  wishes: [string];
}

export interface UserPatch {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: Role;
}

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface FindUserParams {
  email: string;
}

export interface CountParams {
  search?: string;
}

export interface WishesParams {
  userId: string;
  productId: string;
}

export function findUser(params: FindUserParams) {
  return client('users')
    .where({ email: params.email })
    .select();
}

export function createUser(user: CreateUserParams) {
  return client('users')
    .insert(user)
    .returning('*');
}

export function getUsers() {
  return client('users').select('*');
}

export function getUserById(id: string) {
  return client('users')
    .where({ id })
    .select();
}

export function removeUserById(id: string) {
  return client('users')
    .where({ id })
    .del();
}

export function updateUserById(id: string, userPath: UserPatch) {
  return client('users')
    .where({ id })
    .update(userPath)
    .returning('*');
}
