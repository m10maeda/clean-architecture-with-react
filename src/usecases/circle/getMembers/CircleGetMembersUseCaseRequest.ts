import { UseCaseRequest } from '../../shared';

export default class CircleGetMembersUseCaseRequest extends UseCaseRequest {
  public readonly id: string;

  public constructor(id: string) {
    super();

    this.id = id;
  }
}
