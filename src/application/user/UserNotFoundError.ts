import { UserId } from '../../domain/models/user';

export default class UserNotFoundError extends Error {
  public readonly id: string;

  public constructor(id: UserId, message: string) {
    super(message);

    this.id = id.toString();
  }
}
