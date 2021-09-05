import CircleId from './CircleId';

export default class CircleFullError extends Error {
  public readonly id: CircleId;

  public constructor(id: CircleId, message: string) {
    super(message);

    this.id = id;
  }
}
