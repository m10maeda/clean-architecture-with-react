import reducer, { actions, INITIAL_STATE, State, UserType } from './users';

let state: State;

beforeEach(() => {
  state = {
    ...INITIAL_STATE,
  };
});

test('add アクション', () => {
  const newUser = { id: '0', name: 'Alice', type: UserType.Normal };
  const action = actions.add(newUser);

  expect(state[newUser.id]).toBeUndefined();

  const actual = reducer(state, action);

  expect(actual[newUser.id]).toStrictEqual(newUser);
});

test('remove アクション', () => {
  state = {
    '0': { id: '0', name: 'Alice', type: UserType.Normal },
    '1': { id: '1', name: 'Bob', type: UserType.Premium },
  };
  const targetUserId = '1';
  const action = actions.remove(targetUserId);

  expect(state[targetUserId]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[targetUserId]).toBeUndefined();
});

test('rename アクション', () => {
  state = {
    '0': { id: '0', name: 'Alice', type: UserType.Normal },
    '1': { id: '1', name: 'Bob', type: UserType.Premium },
  };
  const renamedUser = { id: '0', name: 'Carol' };
  const action = actions.rename(renamedUser);

  expect(state[renamedUser.id]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[renamedUser.id].name).toBe(renamedUser.name);
});

test('upgrade アクション', () => {
  state = {
    '0': { id: '0', name: 'Alice', type: UserType.Normal },
    '1': { id: '1', name: 'Bob', type: UserType.Premium },
  };
  const targetUserId = '0';
  const action = actions.upgrade(targetUserId);

  expect(state[targetUserId]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[targetUserId].type).toEqual(UserType.Premium);
});

test('downgrade アクション', () => {
  state = {
    '0': { id: '0', name: 'Alice', type: UserType.Normal },
    '1': { id: '1', name: 'Bob', type: UserType.Premium },
  };
  const targetUserId = '1';
  const action = actions.downgrade(targetUserId);

  expect(state[targetUserId]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[targetUserId].type).toEqual(UserType.Normal);
});
