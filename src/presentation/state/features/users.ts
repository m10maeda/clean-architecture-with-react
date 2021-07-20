import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;
export type UserName = string;

export enum UserType {
  Normal,
  Premium,
}

export type User = {
  id: UserId;
  name: UserName;
  type: UserType;
};

export type State = {
  [id: string]: User;
};

export const INITIAL_STATE: State = {};

const { reducer, actions } = createSlice({
  name: 'users',

  initialState: INITIAL_STATE,

  reducers: {
    add: (draft, { payload }: PayloadAction<User>) => {
      draft[payload.id] = payload;
    },

    remove: (draft, { payload }: PayloadAction<UserId>) => {
      delete draft[payload];
    },

    rename: (
      draft,
      { payload }: PayloadAction<{ id: UserId; name: UserName }>,
    ) => {
      const user = draft[payload.id];

      if (user === undefined) return;

      user.name = payload.name;
    },

    upgrade: (draft, { payload }: PayloadAction<UserId>) => {
      const user = draft[payload];

      if (user === undefined) return;

      user.type = UserType.Premium;
    },

    downgrade: (draft, { payload }: PayloadAction<UserId>) => {
      const user = draft[payload];

      if (user === undefined) return;

      user.type = UserType.Normal;
    },
  },
});

export default reducer;
export { actions };
