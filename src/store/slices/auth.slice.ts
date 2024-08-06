import { createSlice } from '@reduxjs/toolkit';
interface AuthSliceI {
  isAuthorized: boolean
}

const initialState: AuthSliceI = {
  isAuthorized: false,
};

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
});

//export const {  } = ChatsSlice.actions;
export default AuthSlice.reducer;
