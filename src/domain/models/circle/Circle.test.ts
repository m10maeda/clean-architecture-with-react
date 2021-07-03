import { User, UserId, UserName, UserType } from '../user';
import Circle from './Circle';
import CircleId from './CircleId';
import CircleName from './CircleName';
import Members from './Members';

test('changeName メソッドが受け取った名前に変更する', () => {
  const name = new CircleName('Baseball');
  const owner = new UserId('0');
  const circle = new Circle(new CircleId('0'), name, owner, new Members([]));
  const newName = new CircleName('Love Baseball');

  expect(name.equals(newName)).toBe(false);

  circle.changeName(newName);

  expect(circle.name.equals(newName)).toBe(true);
});

describe('join メソッド', () => {
  test('サークルメンバー数が1増える', () => {
    const id = new CircleId('0');
    const name = new CircleName('Baseball');
    const owner = new UserId('owener');
    const members = new Members([
      new UserId('0'),
      new UserId('1'),
      new UserId('2'),
    ]);
    const circle = new Circle(id, name, owner, members);

    const count = circle.countMembers();

    const joinedUser = new User(
      new UserId('new'),
      new UserName('Alice'),
      UserType.Normal,
    );

    circle.join(joinedUser);

    const newCount = circle.countMembers();

    expect(newCount).toBe(count + 1);
  });
});

describe('leave メソッド', () => {
  test('サークルメンバー数が1減る', () => {
    const id = new CircleId('0');
    const name = new CircleName('Baseball');
    const owner = new UserId('owener');
    const members = new Members([
      new UserId('0'),
      new UserId('1'),
      new UserId('2'),
    ]);
    const circle = new Circle(id, name, owner, members);

    const count = circle.countMembers();

    const leftUser = new User(
      new UserId('1'),
      new UserName('Alice'),
      UserType.Normal,
    );

    circle.leave(leftUser);

    const newCount = circle.countMembers();

    expect(newCount).toBe(count - 1);
  });
});
