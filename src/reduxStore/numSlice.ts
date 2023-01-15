import { createSlice } from '@reduxjs/toolkit';

export const numSlice = createSlice({
  name: 'num',
  initialState: {
    num: 0,
    active: false,
  },
  reducers: {
    setNum: (state, action) => {
      state.num = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setNum, setActive } = numSlice.actions;

export const selectNum = (state: { num: { num: any } }) => state.num.num;
export const selectActive = (state: { num: { active: any } }) =>
  state.num.active;

export const numReducer = numSlice.reducer;
