import { createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';
const initialUserState = { name: '', email: '', address: '', isAuth: false };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
    },
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const { setUser, setAuth } = userSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.token);
    dispatch(setAuth(true));
    dispatch(getCurrentUser());
    return { message: response.data.message || 'Something went wrong' };
  } catch (e) {
    console.log(e);
  }
};

export const registration =
  (name, email, password, phone, address) => async (dispatch) => {
    try {
      const response = await AuthService.registration(
        name,
        email,
        password,
        phone,
        address,
      );
      localStorage.setItem('token', response.data.token);
      dispatch(setAuth(true));
      dispatch(
        setUser({
          email: response.data.email,
          name: response.data.name,
          address: response.data.address,
        }),
      );
      return { success: true, message: 'Registration successful.' };


    } catch (e) {
      return { success: false, message: 'Something went wrong' }
    }
  };

export const getCurrentUser = () => async (dispatch) => {
  try {
    const response = await AuthService.getCurrentUser();
    dispatch(
      setUser({
        email: response.data.email,
        name: response.data.name,
        address: response.data.address,
      }),
    );
    dispatch(setAuth(true));
  } catch (e) {
    console.log(e);
  }
}

export const activate = (token) => async () => {
  try {
    if (!token) return;

    await AuthService.activate(token);

    return { message: 'Account verified' };
  } catch (e) {
    return { message: 'Something went wrong' };
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('token');
    dispatch(setAuth(false));
    dispatch(setUser({ name: '', email: '' }));
  } catch (e) {
    console.log(e);
  }
};

export const userReducer = userSlice.reducer;
