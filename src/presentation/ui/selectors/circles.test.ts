import { RootState } from '../../state/createStore';
import { UserType } from '../../state/features/users';
import {
  makeCircleMembersCountSelector,
  makeCircleOwnerNameSelector,
} from './circles';

let state: RootState;

beforeEach(() => {
  state = {
    users: {
      '0': { id: '0', name: 'Alice', type: UserType.Normal },
      '1': { id: '1', name: 'Bob', type: UserType.Normal },
      '2': { id: '2', name: 'Carol', type: UserType.Normal },
    },
    circles: {
      '0': {
        id: '0',
        name: 'Baseball',
        owner: '1',
        members: ['0', '2'],
      },
    },
  };
});

test('createCircleOwnerNameSelector', () => {
  const createCircleOwnerNameSelector = makeCircleOwnerNameSelector(state);
  const id = '0';
  const actual = createCircleOwnerNameSelector(id);

  expect(actual).toBe('Bob');
});

test('createCircleMembersCountSelector', () => {
  const id = '0';
  const createCircleMembersCountSelector =
    makeCircleMembersCountSelector(state);
  const actual = createCircleMembersCountSelector(id);

  expect(actual).toBe(3);
});
