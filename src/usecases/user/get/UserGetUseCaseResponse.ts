import { UseCaseResponse } from '../../shared';
import UserData from '../shared/UserData';

export default class UserGetUseCaseResponse extends UseCaseResponse {
  public readonly user: UserData;

  public constructor(user: UserData) {
    super();

    this.user = user;
  }
}
