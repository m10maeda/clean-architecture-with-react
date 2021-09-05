import { User, UserId } from '../user';

type Key = ReturnType<UserId['toString']>;

export default class CircleMembers implements Iterable<User> {
  public readonly owner: User;

  public readonly members: Map<Key, User>;

  public [Symbol.iterator](): Iterator<User> {
    return [this.owner, ...Array.from(this.members.values())][
      Symbol.iterator
    ]();
  }

  public countMembers(): number {
    return Array.from(this).length;
  }

  public countPremiumMembers(): number {
    const premiumMembers = Array.from(this).filter((member) =>
      member.isPremium(),
    );

    return premiumMembers.length;
  }

  public constructor(owner: User, members: Iterable<User>) {
    this.owner = owner;
    this.members = new Map(
      Array.from(members).map((member) => [member.id.toString(), member]),
    );
  }
}
