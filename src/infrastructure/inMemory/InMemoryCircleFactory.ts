import {
  Circle,
  CircleId,
  CircleName,
  ICircleFactory,
  Members,
} from '../../domain/models/circle';
import { User } from '../../domain/models/user';
import SerialNumberAssigner from './SerialNumberAssigner';

export default class InMemoryCircleFactory implements ICircleFactory {
  private readonly serialNumberAssigner: SerialNumberAssigner;

  public async create(name: CircleName, owner: User): Promise<Circle> {
    const serialNumber = this.serialNumberAssigner.next();
    const id = new CircleId(serialNumber);

    return new Circle(id, name, owner.id, new Members([]));
  }

  public constructor(serialNumberAssigner: SerialNumberAssigner) {
    this.serialNumberAssigner = serialNumberAssigner;
  }
}
