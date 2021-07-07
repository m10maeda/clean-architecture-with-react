import {
  IUserFactory,
  User,
  UserId,
  UserName,
  UserType,
} from '../../domain/models/user';
import { ISerialNumberAssigner } from './ISerialNumberAssigner';

export default class UserFactory implements IUserFactory {
  private readonly serialNumberAssigner: ISerialNumberAssigner;

  public async create(name: UserName): Promise<User> {
    const serialNumber = await this.serialNumberAssigner.next();
    const id = new UserId(serialNumber);

    return new User(id, name, UserType.Normal);
  }

  public constructor(serialNumberAssigner: ISerialNumberAssigner) {
    this.serialNumberAssigner = serialNumberAssigner;
  }
}
