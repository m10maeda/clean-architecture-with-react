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

export const createUserNameSelector = createSelector(
  getUsers,
  (users) => (id: UserId) => {
    const user = users[id];

    if (user === undefined) {
      return undefined;
    }

    return user.name;
  },
);

export const createUserTypeSelector = createSelector(
  getUsers,
  (users) => (id: UserId) => {
    const user = users[id];

    if (user === undefined) {
      return undefined;
    }

    return user?.type;
  },
);
