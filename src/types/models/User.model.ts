import { Group } from './Group';
import { Role } from './Role.model';

export type User = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  group?: Group;
  roles: Role[];
};
