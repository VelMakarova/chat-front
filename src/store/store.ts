import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/user.slice.ts';
import ChatsListReducer from './slices/chats-list.slice.ts';
import SelectedChatReducer from './slices/selected-chat.slice.ts';
import AuthReducer from './slices/auth.slice.ts';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    currentUser: UserReducer,
    userChats: ChatsListReducer,
    selectedChat: SelectedChatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
