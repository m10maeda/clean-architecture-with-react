import UserType from './UserType';

test('equals メソッドが正しく比較する', () => {
  expect(UserType.Normal.equals(UserType.Normal)).toBe(true);
  expect(UserType.Premium.equals(UserType.Premium)).toBe(true);

  expect(UserType.Normal.equals(UserType.Premium)).toBe(false);
  expect(UserType.Premium.equals(UserType.Normal)).toBe(false);
});
