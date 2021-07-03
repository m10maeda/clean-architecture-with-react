import { User } from '../user';
import Circle from './Circle';
import CircleName from './CircleName';

export interface ICircleFactory {
  create(name: CircleName, owner: User): Promise<Circle>;
}
