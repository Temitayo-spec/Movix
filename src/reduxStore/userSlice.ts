import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: 'John Doe',
      email: '',
      password: '',
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: { user: { user: any; }; }) => state.user.user;

export const userReducer = userSlice.reducer;