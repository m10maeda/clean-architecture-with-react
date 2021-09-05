import { UseCaseRequest } from '../../shared';

export default class CircleGetUseCaseRequest extends UseCaseRequest {
  public readonly id: string;

  public constructor(id: string) {
    super();

    this.id = id;
  }
}
