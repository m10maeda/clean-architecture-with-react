import { UseCaseRequest } from '../../shared';

export default class CircleDeleteUseCaseRequest extends UseCaseRequest {
  public readonly id: string;

  public constructor(id: string) {
    super();

    this.id = id;
  }
}
