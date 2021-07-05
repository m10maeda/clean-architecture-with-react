import { Circle, CircleId } from '../../domain/models/circle';

export interface ICircleDao {
  find(predicate: (circle: Circle) => boolean): Promise<Circle | undefined>;
  findAll(predicate: (circle: Circle) => boolean): Promise<Iterable<Circle>>;
  get(id: CircleId): Promise<Circle | undefined>;
  getAll(): Promise<Iterable<Circle>>;
  save(circle: Circle): Promise<void>;
  delete(circle: Circle): Promise<void>;
}
