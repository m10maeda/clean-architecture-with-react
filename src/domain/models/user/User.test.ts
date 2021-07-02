import User from './User';
import UserId from './UserId';
import UserName from './UserName';
import UserType from './UserType';

test('changeName メソッドが受け取った名前に変更する', () => {
  const name = new UserName('Alice');
  const user = new User(new UserId('0'), name, UserType.Normal);
  const newName = new UserName('Bob');

  expect(name.equals(newName)).toBe(false);

  user.changeName(newName);

  expect(user.name.equals(newName)).toBe(true);
});
