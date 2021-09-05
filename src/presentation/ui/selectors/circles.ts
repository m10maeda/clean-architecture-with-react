import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../state/createStore';
import { Circle, CircleId, State } from '../../state/features/circles';
import { getUsers } from './users';

export const getCircles = (state: RootState): State => state.circles;

export const getCircleById =
  (id: CircleId) =>
  (state: RootState): Circle | undefined =>
    getCircles(state)[id];

export const allCircleIdsSelector = createSelector(getCircles, (state) =>
  Object.keys(state),
);

export const makeCircleIsExistsSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => circles[id] !== undefined,
);

export const makeCircleNameSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    return circle.name;
  },
);

export const makeCircleOwnerIdSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    return circle.owner;
  },
);

export const makeCircleOwnerNameSelector = createSelector(
  [getCircles, getUsers],
  (circles, users) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    const owner = users[circle.owner];

    if (owner === undefined) {
      return undefined;
    }

    return owner.name;
  },
);

export const makeCircleMemberIdsSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    return circle.members;
  },
);

export const makeCircleMembersCountSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    const membersCount = circle.members.length;
    const ownerCount = 1;

    return membersCount + ownerCount;
  },
);
