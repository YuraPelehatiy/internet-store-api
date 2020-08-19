export type UserRole = 'user' | 'admin';

export interface Timestamps {
  created_at?: string;
  updated_at?: string;
}

export interface PaginationParams {
  limit: number;
  offset: number;
  search?: string;
}
