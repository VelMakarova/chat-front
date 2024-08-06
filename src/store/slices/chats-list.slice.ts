import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '@/api';
import { ChatsListSliceI } from './interfaces.ts';


const initialState: ChatsListSliceI = {
  chats: [],
  lastMessages: [],
};

export const getUserChats = createAsyncThunk(
  'chats/getUserChats',
  async (id: string) => {
    const res = await ApiService.getChatsApi().getChatsByUserId(id);
    return res.data;
  }
);

export const ChatsListSlice = createSlice({
  name: 'Chats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserChats.fulfilled, (state, action) => {
      state.chats = [...action.payload];
    });
  },
});

//export const {  } = ChatsSlice.actions;
export default ChatsListSlice.reducer;
