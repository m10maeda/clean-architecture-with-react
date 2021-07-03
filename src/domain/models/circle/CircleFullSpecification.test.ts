import { User, UserId, UserName, UserType } from '../user';
import CircleFullSpecification from './CircleFullSpecification';
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

describe('isSatisfiedBy メソッド', () => {
  const fullSpec = new CircleFullSpecification();
  const owner = new User(
    new UserId('owner'),
    new UserName('Owner'),
    UserType.Normal,
  );

  describe('プレミアムユーザーが10名未満の場合', () => {
    const premiumUsers = new Array(9)
      .fill('')
      .map((_, index) => createPremiumUser(`${index}`));

    test('かつ、サークルオーナーを含めたサークルメンバーが30名以内の場合、true を返す', () => {
      const normalUsers = new Array(30 - [owner, ...premiumUsers].length)
        .fill('')
        .map((_, index) => createNormalUser(`${index}`));
      const members = new CircleMembers(owner, [
        ...premiumUsers,
        ...normalUsers,
      ]);

      expect(fullSpec.isSatisfiedBy(members)).toBe(true);
    });

    test('かつ、サークルオーナーを含めたサークルメンバーが30名を超える場合、false を返す', () => {
      const normalUsers = new Array(31 - [owner, ...premiumUsers].length)
        .fill('')
        .map((_, index) => createNormalUser(`${index}`));
      const members = new CircleMembers(owner, [
        ...premiumUsers,
        ...normalUsers,
      ]);

      expect(fullSpec.isSatisfiedBy(members)).toBe(false);
    });
  });

  describe('プレミアムユーザーが10名以上の場合', () => {
    const premiumUsers = new Array(10)
      .fill('')
      .map((_, index) => createPremiumUser(`${index}`));

    test('かつ、サークルオーナーを含めたサークルメンバーが50名以内の場合、true を返す', () => {
      const normalUsers = new Array(50 - [owner, ...premiumUsers].length)
        .fill('')
        .map((_, index) => createNormalUser(`${index}`));
      const members = new CircleMembers(owner, [
        ...premiumUsers,
        ...normalUsers,
      ]);

      expect(fullSpec.isSatisfiedBy(members)).toBe(true);
    });

    test('かつ、サークルオーナーを含めたサークルメンバーが50名を超える場合、false を返す', () => {
      const normalUsers = new Array(51 - [owner, ...premiumUsers].length)
        .fill('')
        .map((_, index) => createNormalUser(`${index}`));
      const members = new CircleMembers(owner, [
        ...premiumUsers,
        ...normalUsers,
      ]);

      expect(fullSpec.isSatisfiedBy(members)).toBe(false);
    });
  });
});
