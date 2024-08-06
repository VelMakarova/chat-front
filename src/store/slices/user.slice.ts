import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '@/api';
import { UserI } from './interfaces.ts';

interface IUserSlice {
	isUserLoading: boolean,
	fromRegister: boolean,
	user: UserI
}
interface IFinishRegister {
	firstName: string;
	lastName: string;
}


const initUser: UserI = {
	_id: '',
	firstName: '',
	lastName: '',
	email: 'it\'s going to be soon',
	logins: 2,
};

const initialState: IUserSlice = {
	isUserLoading: false,
	fromRegister: false,
	user: initUser,
};

export const getUser = createAsyncThunk(
  'users/getUser',
  async (token: string)=> {
		if (token) {
			const res = await ApiService.getAuthApi().getUser(token);
			return { ...res.data };
		}
		return initUser;
  });

export const finishRegistration = createAsyncThunk(
	'users/finishRegistration',
	async (opt: {token: string, op: IFinishRegister}) => {
		const res = await ApiService.getAuthApi().finishReg(opt.token, opt.op);
		return res.data;
	}
);

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(getUser.pending, (state) => {
			state.isUserLoading = true;
		});
    builder.addCase(getUser.fulfilled, (state, action) => {
			state.user = { ...action.payload };
			state.fromRegister = action.payload.logins === 1;
			console.log(state.fromRegister = action.payload.logins < 2);
			if (action.payload?.firstName.length) {
				state.isUserLoading = false;
			}
		});
		builder.addCase(finishRegistration.fulfilled, (state, action) => {
			state.user = { ...action.payload };
			state.fromRegister = false;
		});
  },
});

//export const {  } = UserSlice.actions;
export default UserSlice.reducer;
