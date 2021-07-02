enum Type {
  Normal,
  Premiam,
}

export default class UserType {
  private readonly value: Type;

  public equals(other: UserType): boolean {
    return this.value === other.value;
  }

  private constructor(value: Type) {
    this.value = value;
  }

  public static readonly Normal = new UserType(Type.Normal);

  public static readonly Premium = new UserType(Type.Premiam);
}
