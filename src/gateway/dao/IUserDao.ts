import { User, UserId } from '../../domain/models/user';

export interface IUserDao {
  find(predicate: (user: User) => boolean): Promise<User | undefined>;
  findAll(predicate: (user: User) => boolean): Promise<Iterable<User>>;
  get(id: UserId): Promise<User | undefined>;
  getAll(): Promise<Iterable<User>>;
  save(user: User): Promise<void>;
  delete(user: User): Promise<void>;
}
