export default class UserId {
  private readonly value: string;

  public toString(): string {
    return this.value;
  }

  public equals(other: UserId): boolean {
    return this.value === other.value;
  }

  public constructor(value: string) {
    if (value === '') throw new Error(`UserId が空文字です。`);

    this.value = value;
  }
}
