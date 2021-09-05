import { UseCaseRequest } from '../../shared';

export default class CircleCreateUseCaseRequest extends UseCaseRequest {
  public readonly name: string;

  public readonly ownerId: string;

  public constructor(name: string, ownerId: string) {
    super();

    this.name = name;
    this.ownerId = ownerId;
  }
}
