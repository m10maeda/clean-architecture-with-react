import {
  Circle,
  CircleId,
  CircleName,
  ICircleRepository,
} from '../../domain/models/circle';
import { ICircleDao } from '../dao/ICircleDao';

export default class CircleRepository implements ICircleRepository {
  private readonly dao: ICircleDao;

  public async find(id: CircleId): Promise<Circle | undefined>;
  public async find(name: CircleName): Promise<Circle | undefined>;
  public async find(ids: Iterable<CircleId>): Promise<Iterable<Circle>>;
  public async find(
    value: CircleId | CircleName | Iterable<CircleId>,
  ): Promise<Circle | Iterable<Circle> | undefined> {
    if (value instanceof CircleId) {
      const circle = await this.dao.get(value);

      return circle;
    }
    if (value instanceof CircleName) {
      const circle = await this.dao.find((_circle) =>
        _circle.name.equals(value),
      );

      return circle;
    }

    const circles = await this.dao.findAll((_circle) =>
      Array.from(value).some((id) => id.equals(_circle.id)),
    );

    return circles;
  }

  public async findAll(): Promise<Iterable<Circle>> {
    const circles = await this.dao.getAll();

    return circles;
  }

  public async save(circle: Circle): Promise<void> {
    await this.dao.save(circle);
  }

  public async delete(circle: Circle): Promise<void> {
    await this.dao.delete(circle);
  }

  public constructor(dao: ICircleDao) {
    this.dao = dao;
  }
}
