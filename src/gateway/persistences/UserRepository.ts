import {
  IUserRepository,
  User,
  UserId,
  UserName,
} from '../../domain/models/user';
import { IUserDao } from '../dao/IUserDao';

export default class UserRepository implements IUserRepository {
  private readonly dao: IUserDao;

  public async find(id: UserId): Promise<User | undefined>;
  public async find(name: UserName): Promise<User | undefined>;
  public async find(ids: Iterable<UserId>): Promise<Iterable<User>>;
  public async find(
    value: UserId | UserName | Iterable<UserId>,
  ): Promise<User | Iterable<User> | undefined> {
    if (value instanceof UserId) {
      const user = await this.dao.get(value);

      return user;
    }

    if (value instanceof UserName) {
      const user = await this.dao.find((_user) => _user.name.equals(value));

      return user;
    }

    const users = await this.dao.findAll((_user) =>
      Array.from(value).some((id) => id.equals(_user.id)),
    );

    return users;
  }

  public async findAll(): Promise<Iterable<User>> {
    const users = await this.dao.getAll();

    return users;
  }

  public async save(user: User): Promise<void> {
    await this.dao.save(user);
  }

  public async delete(user: User): Promise<void> {
    await this.dao.delete(user);
  }

  public constructor(dao: IUserDao) {
    this.dao = dao;
  }
}
