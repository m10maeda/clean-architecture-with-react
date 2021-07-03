import { UseCaseResponse } from '../../shared';
import CircleData from '../shared/CircleData';

export default class CircleGetAllUseCaseResponse extends UseCaseResponse {
  public readonly circles: Iterable<CircleData>;

  public constructor(circles: Iterable<CircleData>) {
    super();

    this.circles = circles;
  }
}
