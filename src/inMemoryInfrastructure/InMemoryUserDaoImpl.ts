import { User, UserId, UserName, UserType } from '../domain/models/user';
import { IUserDao } from '../gateway/dao';

type UserSchema = {
  readonly id: string;
  name: string;
  type: 0 | 1;
};

export default class InMemoryUserDaoImpl implements IUserDao {
  private readonly users: Map<UserSchema['id'], UserSchema>;

  public async find(
    predicate: (user: User) => boolean,
  ): Promise<User | undefined> {
    return new Promise((resolve) => {
      const schema = Array.from(this.users.values()).find((user) =>
        predicate(this.convertFrom(user)),
      );

      if (schema === undefined) {
        return resolve(undefined);
      }

      const user = this.convertFrom(schema);

      return resolve(user);
    });
  }

  public findAll(predicate: (user: User) => boolean): Promise<Iterable<User>> {
    return new Promise((resolve) => {
      const schemas = Array.from(this.users.values()).filter((user) =>
        predicate(this.convertFrom(user)),
      );

      const users = schemas.map((schema) => this.convertFrom(schema));

      return resolve(users);
    });
  }

  public get(id: UserId): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const schema = this.users.get(id.toString());

      if (schema === undefined) {
        return reject();
      }

      const user = this.convertFrom(schema);

      return resolve(user);
    });
  }

  public getAll(): Promise<Iterable<User>> {
    return new Promise((resolve) => {
      const users = Array.from(this.users.values()).map((user) =>
        this.convertFrom(user),
      );

      return resolve(users);
    });
  }

  public save(user: User): Promise<void> {
    return new Promise((resolve) => {
      const schema = this.convertFrom(user);

      this.users.set(schema.id, schema);

      return resolve();
    });
  }

  public async delete(user: User): Promise<void> {
    return new Promise((resolve) => {
      const schema = this.convertFrom(user);

      this.users.delete(schema.id);

      return resolve();
    });
  }

  private convertFrom(user: UserSchema): User;
  private convertFrom(user: User): UserSchema;
  // eslint-disable-next-line class-methods-use-this
  private convertFrom(user: User | UserSchema): UserSchema | User {
    if (user instanceof User) {
      return {
        id: user.id.toString(),
        name: user.name.toString(),
        type: user.type.equals(UserType.Normal) ? 0 : 1,
      };
    }

    const type = user.type === 0 ? UserType.Normal : UserType.Premium;

    return new User(new UserId(user.id), new UserName(user.name), type);
  }

  public constructor(users: Iterable<UserSchema>) {
    this.users = new Map(Array.from(users).map((user) => [user.id, user]));
  }
}
