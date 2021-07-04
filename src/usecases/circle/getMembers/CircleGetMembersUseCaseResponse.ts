import { UseCaseResponse } from '../../shared';
import { UserData } from '../../user/shared';

export default class CircleGetMembersUseCaseResponse extends UseCaseResponse {
  public readonly members: Iterable<UserData>;

  public constructor(members: Iterable<UserData>) {
    super();

    this.members = members;
  }
}
