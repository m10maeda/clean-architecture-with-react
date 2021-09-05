import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserId } from './users';

export type CircleId = string;
export type CircleName = string;

export type Circle = {
  id: CircleId;
  name: CircleName;
  owner: UserId;
  members: UserId[];
};

export type State = {
  [id: string]: Circle;
};

export const INITIAL_STATE: State = {};

const { reducer, actions } = createSlice({
  name: 'circles',

  initialState: INITIAL_STATE,

  reducers: {
    add: (draft, { payload }: PayloadAction<Circle>) => {
      draft[payload.id] = payload;
    },

    remove: (draft, { payload }: PayloadAction<CircleId>) => {
      delete draft[payload];
    },

    rename: (
      draft,
      { payload }: PayloadAction<{ id: CircleId; name: CircleName }>,
    ) => {
      const circle = draft[payload.id];

      if (circle === undefined) return;

      circle.name = payload.name;
    },

    join: (
      draft,
      { payload }: PayloadAction<{ id: CircleId; joinedUserId: UserId }>,
    ) => {
      const circle = draft[payload.id];

      if (circle === undefined) return;

      circle.members.push(payload.joinedUserId);
    },

    leave: (
      draft,
      { payload }: PayloadAction<{ id: CircleId; leftUserId: UserId }>,
    ) => {
      const circle = draft[payload.id];

      if (circle === undefined) return;

      circle.members = circle.members.filter(
        (memberId) => memberId !== payload.leftUserId,
      );
    },
  },
});

export default reducer;
export { actions };
