import { UsersApi } from './users-api.ts';
import { ChatsApi } from './chats-api.ts';
import { MessagesApi } from './messages-api.ts';
import { AuthApi } from './auth-api.ts';

class ApiService {
  static getAuthApi = () => AuthApi;
  static getUsersApi = () => UsersApi;
  static getChatsApi = () => ChatsApi;
  static getMessageApi = () => MessagesApi;
}

export default ApiService;
