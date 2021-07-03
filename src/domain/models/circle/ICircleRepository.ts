import Circle from './Circle';
import CircleId from './CircleId';
import CircleName from './CircleName';

export interface ICircleRepository {
  find(id: CircleId): Promise<Circle>;
  find(id: CircleName): Promise<Circle>;
  findAll(): Promise<Iterable<Circle>>;
  save(circle: Circle): Promise<void>;
  delete(circle: Circle): Promise<void>;
}
