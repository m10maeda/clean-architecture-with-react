export default class SerialNumberAssigner {
  private currentId: number;

  public next(): string {
    this.currentId += 1;

    return this.currentId.toString();
  }

  public constructor(currentId = 0) {
    this.currentId = currentId;
  }
}
