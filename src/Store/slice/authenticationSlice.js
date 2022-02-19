import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  userData: {},
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: INITIAL_STATE,
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { updateUserData } = authSlice.actions;

export const authState = (state) => state.authSlice;
