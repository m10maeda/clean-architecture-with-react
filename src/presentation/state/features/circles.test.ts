import reducer, { actions, INITIAL_STATE, State } from './circles';

let state: State;

beforeEach(() => {
  state = {
    ...INITIAL_STATE,
  };
});

test('add アクション', () => {
  const newCircle = { id: '0', name: 'Baseball', owner: '0', members: [] };
  const action = actions.add(newCircle);

  expect(state[newCircle.id]).toBeUndefined();

  const actual = reducer(state, action);

  expect(actual[newCircle.id]).toStrictEqual(newCircle);
});

test('remove アクション', () => {
  state = {
    '0': { id: '0', name: 'Baseball', owner: '0', members: [] },
    '1': { id: '1', name: 'Football', owner: '1', members: [] },
  };
  const targetCircleId = '1';
  const action = actions.remove(targetCircleId);

  expect(state[targetCircleId]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[targetCircleId]).toBeUndefined();
});

test('rename アクション', () => {
  state = {
    '0': { id: '0', name: 'Baseball', owner: '0', members: [] },
    '1': { id: '1', name: 'Football', owner: '1', members: [] },
  };
  const updatedCircle = { id: '0', name: 'Love Baseball' };
  const action = actions.rename(updatedCircle);

  expect(state[updatedCircle.id]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[updatedCircle.id].name).toBe(updatedCircle.name);
});

test('join アクション', () => {
  state = {
    '0': { id: '0', name: 'Baseball', owner: '0', members: [] },
    '1': { id: '1', name: 'Football', owner: '1', members: [] },
  };
  const targetCircleId = '0';
  const joinedUserId = 'joinedUserId';
  const action = actions.join({ id: targetCircleId, joinedUserId });

  expect(state[targetCircleId]).toBeDefined();

  const actual = reducer(state, action);

  expect(actual[targetCircleId].members).toContain(joinedUserId);
});

test('left アクション', () => {
  state = {
    '0': { id: '0', name: 'Baseball', owner: '0', members: ['0', '1'] },
    '1': { id: '1', name: 'Football', owner: '1', members: [] },
  };
  const targetCircleId = '0';
  const leftUserId = '1';
  const action = actions.leave({ id: targetCircleId, leftUserId });

  expect(state[targetCircleId]).toBeDefined();
  expect(state[targetCircleId].members).toContain(leftUserId);

  const actual = reducer(state, action);

  expect(actual[targetCircleId].members).not.toContain(leftUserId);
});
