import { UseCaseResponse } from '../../shared';
import UserData from '../shared/UserData';

export default class UserGetAllUseCaseResponse extends UseCaseResponse {
  public readonly users: Iterable<UserData>;

  public constructor(users: Iterable<UserData>) {
    super();

    this.users = users;
  }
}
