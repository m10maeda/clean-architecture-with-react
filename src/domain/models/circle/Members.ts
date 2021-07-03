import { UserId } from '../user';

type Key = ReturnType<UserId['toString']>;

export default class Members implements Iterable<UserId> {
  public readonly members: Map<Key, UserId>;

  public [Symbol.iterator](): Iterator<UserId> {
    return this.members.values();
  }

  public countMembers(): number {
    return Array.from(this).length;
  }

  public add(member: UserId): Members {
    return new Members([...Array.from(this), member]);
  }

  public remove(member: UserId): Members {
    return new Members(
      Array.from(this).filter((_member) => !_member.equals(member)),
    );
  }

  public constructor(members: Iterable<UserId>) {
    this.members = new Map(
      Array.from(members).map((member) => [member.toString(), member]),
    );
  }
}
