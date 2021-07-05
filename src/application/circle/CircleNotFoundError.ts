import { CircleId } from '../../domain/models/circle';

export default class CircleNotFoundError extends Error {
  public readonly id: string;

  public constructor(id: CircleId, message: string) {
    super(message);

    this.id = id.toString();
  }
}
