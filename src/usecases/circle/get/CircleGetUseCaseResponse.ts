import { UseCaseResponse } from '../../shared';
import { CircleData } from '../shared';

export default class CircleGetUseCaseResponse extends UseCaseResponse {
  public readonly circle: CircleData;

  public constructor(circle: CircleData) {
    super();

    this.circle = circle;
  }
}
