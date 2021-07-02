import User from './User';
import UserId from './UserId';
import UserName from './UserName';

export interface IUserRepository {
  find(id: UserId): Promise<User>;
  find(name: UserName): Promise<User>;
  find(ids: Iterable<UserId>): Promise<Iterable<User>>;
  findAll(): Promise<Iterable<User>>;
  save(user: User): Promise<void>;
  delete(user: User): Promise<void>;
}
