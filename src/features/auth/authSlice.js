import { createSlice } from '@reduxjs/toolkit';

const localAuth = JSON.parse(localStorage.getItem('user'));

let initialState;

if (localAuth) {
  initialState = localAuth;
} else {
  initialState = {
    isAuthenticated: false,
    data: null,
    token: '',
  };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.accessToken;
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = null;
      state.isAuthenticated = false;
      state.token = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
