import { createSelector, OutputSelector } from '@reduxjs/toolkit';
import { RootState } from '../../state/createStore';
import {
  State,
  User,
  UserId,
  UserName,
  UserType,
} from '../../state/features/users';

export const getUsers = (state: RootState): State => state.users;

export const getUserById =
  (id: UserId) =>
  (state: RootState): User | undefined =>
    getUsers(state)[id];

export const allUserIdsSelector = createSelector(getUsers, (state) =>
  Object.keys(state),
);

export const createUserNameSelector = (
  id: UserId,
): OutputSelector<
  RootState,
  UserName | undefined,
  (response: User) => UserName | undefined
> =>
  createSelector(getUserById(id), (user) =>
    user !== undefined ? user.name : undefined,
  );

export const createUserTypeSelector = (
  id: UserId,
): OutputSelector<
  RootState,
  UserType | undefined,
  (response: User) => UserType | undefined
> => createSelector(getUserById(id), (user) => user?.type);
