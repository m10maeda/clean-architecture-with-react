import {
  Circle,
  CircleId,
  CircleName,
  ICircleFactory,
  Members,
} from '../../domain/models/circle';
import { User } from '../../domain/models/user';
import { ISerialNumberAssigner } from './ISerialNumberAssigner';

export default class CircleFactory implements ICircleFactory {
  private readonly serialNumberAssigner: ISerialNumberAssigner;

  public async create(name: CircleName, owner: User): Promise<Circle> {
    const serialNumber = await this.serialNumberAssigner.next();
    const id = new CircleId(serialNumber);

    return new Circle(id, name, owner.id, new Members([]));
  }

  public constructor(serialNumberAssigner: ISerialNumberAssigner) {
    this.serialNumberAssigner = serialNumberAssigner;
  }
}
