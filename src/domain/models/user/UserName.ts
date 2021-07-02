export default class UserName {
  private readonly value: string;

  public toString(): string {
    return this.value;
  }

  public equals(other: UserName): boolean {
    return this.value === other.value;
  }

  public constructor(value: string) {
    if (value === '') throw new Error(`UserName が空文字です。`);

    this.value = value;
  }
}
