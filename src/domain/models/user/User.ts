import UserId from './UserId';
import UserName from './UserName';
import UserType from './UserType';

export default class User {
  public readonly id: UserId;

  private _name: UserName;

  private _type: UserType;

  public get name(): UserName {
    return this._name;
  }

  public get type(): UserType {
    return this._type;
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }

  public isPremium(): boolean {
    return this._type === UserType.Premium;
  }

  public changeName(name: UserName): void {
    this._name = name;
  }

  public upgrade(): void {
    this._type = UserType.Premium;
  }

  public downgrade(): void {
    this._type = UserType.Normal;
  }

  public constructor(id: UserId, name: UserName, type: UserType) {
    this.id = id;
    this._name = name;
    this._type = type;
  }
}
