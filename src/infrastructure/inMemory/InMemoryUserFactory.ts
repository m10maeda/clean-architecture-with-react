import {
  IUserFactory,
  User,
  UserId,
  UserName,
  UserType,
} from '../../domain/models/user';
import SerialNumberAssigner from './SerialNumberAssigner';

export default class InMemoryUserFactory implements IUserFactory {
  private readonly serialNumberAssigner: SerialNumberAssigner;

  public async create(name: UserName): Promise<User> {
    const serialNumber = this.serialNumberAssigner.next();
    const id = new UserId(serialNumber);

    return new User(id, name, UserType.Normal);
  }

  public constructor(serialNumberAssigner: SerialNumberAssigner) {
    this.serialNumberAssigner = serialNumberAssigner;
  }
}
