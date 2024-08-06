import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ApiService from '@/api';
import { MsgI, UserI } from './interfaces.ts';

interface setChatActivePayloadI {
  chatID: string,
  companion: UserI | UserI[],
}

interface SelectedChatI {
  id: string,
  companion: UserI | UserI[] | null,
  messages: MsgI[]
}

const initialState: SelectedChatI = {
  id: '',
  companion: null,
  messages: [],
};

export const getMessages = createAsyncThunk(
  'chat/getMessages',
  async (id: string) => {
    if(id) {
      const res = await ApiService.getMessageApi().getMessagesByChatId(id);
      return res.data;
    }
    return [];
  }
);

export const SelectedChatSlice = createSlice({
  name: 'activeChat',
  initialState,
  reducers: {
    selectChat: (state, action: PayloadAction<setChatActivePayloadI>) => {
      state.id = action.payload.chatID;
      state.companion = action.payload.companion;
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = [...action.payload];
    });
  },
});

export const { selectChat } = SelectedChatSlice.actions;
export default SelectedChatSlice.reducer;
