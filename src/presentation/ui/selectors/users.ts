import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../state/createStore';
import { State, User, UserId } from '../../state/features/users';

export const getUsers = (state: RootState): State => state.users;

export const getUserById =
  (id: UserId) =>
  (state: RootState): User | undefined =>
    getUsers(state)[id];

export const allUserIdsSelector = createSelector(getUsers, (state) =>
  Object.keys(state),
);

export const makeUserIsExistsSelector = createSelector(
  getUsers,
  (users) => (id: UserId) => users[id] !== undefined,
);

export const makeUserNameSelector = createSelector(
  getUsers,
  (users) => (id: UserId) => {
    const user = users[id];

    if (user === undefined) {
      return undefined;
    }

    return user.name;
  },
);

export const makeUserTypeSelector = createSelector(
  getUsers,
  (users) => (id: UserId) => {
    const user = users[id];

    if (user === undefined) {
      return undefined;
    }

    return user?.type;
  },
);
