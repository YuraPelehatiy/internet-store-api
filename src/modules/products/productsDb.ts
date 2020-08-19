import { client } from '../../services/database';
import { Timestamps } from '../../types/types';

export interface ProductPath {
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface Product extends Timestamps, ProductPath {
  id: string;
}

export function getProducts() {
  return client('products').select('*');
}

export function getProductById(id: string) {
  return client('products')
    .where({ id })
    .select();
}

export function getProductsByIds(ids: [string]) {
  return client('products')
    .select('*')
    .from('products')
    .whereIn('id', ids);
}

export function removeProductById(id: string) {
  return client('products')
    .where({ id })
    .del();
}

export function updateProductById(
  id: string,
  productPath: ProductPath,
) {
  return client('products')
    .where({ id })
    .update(productPath)
    .returning('*');
}

export function createProduct(productPath: ProductPath) {
  return client('products')
    .insert(productPath)
    .returning('*');
}
