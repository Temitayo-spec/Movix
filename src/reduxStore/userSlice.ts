import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
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
export const selectUserName = (state: { user: { user: { name: any } } }) => state.user.user.name;
export const selectUserEmail = (state: { user: { user: { email: any } } }) => state.user.user.email;
export const selectUserPassword = (state: { user: { user: { password: any; } } }) => state.user.user.password;

export const userReducer = userSlice.reducer;