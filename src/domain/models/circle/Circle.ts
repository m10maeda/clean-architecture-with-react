import { User, UserId } from '../user';
import CircleId from './CircleId';
import CircleName from './CircleName';
import Members from './Members';

export default class Circle {
  public readonly id: CircleId;

  private _name: CircleName;

  public get name(): CircleName {
    return this._name;
  }

  private _owner: UserId;

  public get owner(): UserId {
    return this._owner;
  }

  private _members: Members;

  public get members(): Iterable<UserId> {
    return this._members;
  }

  public countMembers(): number {
    // owner の分1プラス
    return this._members.countMembers() + 1;
  }

  public equals(other: Circle): boolean {
    return this.id.equals(other.id);
  }

  public changeName(name: CircleName): void {
    this._name = name;
  }

  public join(member: User): void {
    this._members = this._members.add(member.id);
  }

  public leave(member: User): void {
    this._members = this._members.remove(member.id);
  }

  public constructor(
    id: CircleId,
    name: CircleName,
    owner: UserId,
    members: Members,
  ) {
    this.id = id;
    this._name = name;
    this._owner = owner;
    this._members = members;
  }
}
