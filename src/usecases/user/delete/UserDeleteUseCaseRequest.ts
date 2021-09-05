import { UseCaseRequest } from '../../shared';

export default class UserDeleteUseCaseRequest extends UseCaseRequest {
  public readonly id: string;

  public constructor(id: string) {
    super();

    this.id = id;
  }
}
