import { createSelector, OutputSelector } from '@reduxjs/toolkit';
import { RootState } from '../../state/createStore';
import {
  Circle,
  CircleId,
  CircleName,
  State,
} from '../../state/features/circles';
import { State as UserState, UserId } from '../../state/features/users';
import { getUsers } from './users';

export const getCircles = (state: RootState): State => state.circles;

export const getCircleById =
  (id: CircleId) =>
  (state: RootState): Circle | undefined =>
    getCircles(state)[id];

export const allCircleIdsSelector = createSelector(getCircles, (state) =>
  Object.keys(state),
);

export const createCircleNameSelector = (
  id: CircleId,
): OutputSelector<
  RootState,
  CircleName | undefined,
  (response: Circle) => CircleName | undefined
> =>
  createSelector(getCircleById(id), (circle) =>
    circle !== undefined ? circle.name : undefined,
  );

export const createCircleOwnerIdSelector = (
  id: CircleId,
): OutputSelector<
  RootState,
  UserId | undefined,
  (response: Circle) => UserId | undefined
> => createSelector(getCircleById(id), (circle) => circle?.owner);

export const createCircleOwnerNameSelector = (
  id: CircleId,
): OutputSelector<
  RootState,
  UserId | undefined,
  (res1: Circle | undefined, res2: UserState) => UserId | undefined
> =>
  createSelector([getCircleById(id), getUsers], (circle, users) => {
    if (circle?.owner === undefined) {
      return undefined;
    }

    return users[circle.owner] !== undefined
      ? users[circle.owner].name
      : undefined;
  });

export const createCircleMemberIdsSelector = (
  id: CircleId,
): OutputSelector<
  RootState,
  UserId[] | undefined,
  (response: Circle) => UserId[] | undefined
> => createSelector(getCircleById(id), (circle) => circle?.members);
