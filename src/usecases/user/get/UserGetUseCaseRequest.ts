import { UseCaseRequest } from '../../shared';

export default class UserGetUseCaseRequest extends UseCaseRequest {
  public readonly id: string;

  public constructor(id: string) {
    super();

    this.id = id;
  }
}
