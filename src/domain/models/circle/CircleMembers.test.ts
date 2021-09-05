import { User, UserId, UserName, UserType } from '../user';
import CircleMembers from './CircleMembers';

const createNormalUser = (identifier: string): User =>
  new User(
    new UserId(`normal-${identifier}`),
    new UserName(`Normal_${identifier}`),
    UserType.Normal,
  );

const createPremiumUser = (identifier: string): User =>
  new User(
    new UserId(`premium-${identifier}`),
    new UserName(`Premium_${identifier}`),
    UserType.Premium,
  );

test('countMembers() がオーナーを含めたメンバー数を返す', () => {
  const owner = createNormalUser('owner');
  const premiumUsers = new Array(2)
    .fill('')
    .map((_, index) => createPremiumUser(`${index}`));
  const normalUsers = new Array(3)
    .fill('')
    .map((_, index) => createNormalUser(`${index}`));

  const members = new CircleMembers(owner, [...premiumUsers, ...normalUsers]);
  const expected = [owner, ...premiumUsers, ...normalUsers].length;

  expect(members.countMembers()).toBe(expected);
});
