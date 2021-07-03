import Circle from './Circle';
import CircleId from './CircleId';
import CircleName from './CircleName';

export interface ICircleRepository {
  find(id: CircleId): Promise<Circle | undefined>;
  find(id: CircleName): Promise<Circle | undefined>;
  findAll(): Promise<Iterable<Circle>>;
  save(circle: Circle): Promise<void>;
  delete(circle: Circle): Promise<void>;
}
