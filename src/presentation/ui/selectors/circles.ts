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

export const createCircleNameSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    return circle.name;
  },
);

export const createCircleOwnerIdSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    return circle.owner;
  },
);

export const createCircleOwnerNameSelector = createSelector(
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

export const createCircleMemberIdsSelector = createSelector(
  getCircles,
  (circles) => (id: CircleId) => {
    const circle = circles[id];

    if (circle === undefined) {
      return undefined;
    }

    return circle.members;
  },
);

export const createCircleMembersCountSelector = createSelector(
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
