import { DB } from './db.interface';

export interface Context {
  db: DB;
}

interface CreateUserInput {
  name: string;
  age: number;
  email: string;
  description?: string;
}

interface UpdateUserInput {
  name?: string;
  age?: number;
  email?: string;
  description?: string;
}

export interface CreateUserData {
  data: CreateUserInput;
}

export interface DeleteUserData {
  id: string;
}

export interface UpdateUserData extends DeleteUserData {
  data: UpdateUserInput;
}
