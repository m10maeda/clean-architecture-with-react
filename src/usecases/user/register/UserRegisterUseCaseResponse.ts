import { UseCaseResponse } from '../../shared';

export default class UserRegisterUseCaseResponse extends UseCaseResponse {
  public readonly createdUserId: string;

  public constructor(createdUserId: string) {
    super();

    this.createdUserId = createdUserId;
  }
}
