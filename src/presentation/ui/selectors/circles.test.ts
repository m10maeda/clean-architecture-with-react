import { RootState } from '../../state/createStore';
import { UserType } from '../../state/features/users';
import {
  createCircleMembersCountSelector,
  createCircleOwnerNameSelector,
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
  const id = '0';
  const actual = createCircleOwnerNameSelector(id)(state);

  expect(actual).toBe('Bob');
});

test('createCircleMembersCountSelector', () => {
  const id = '0';
  const actual = createCircleMembersCountSelector(id)(state);

  expect(actual).toBe(3);
});
