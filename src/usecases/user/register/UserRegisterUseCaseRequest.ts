import { UseCaseRequest } from '../../shared';

export default class UserRegisterUseCaseRequest extends UseCaseRequest {
  public readonly name: string;

  public constructor(name: string) {
    super();

    this.name = name;
  }
}
