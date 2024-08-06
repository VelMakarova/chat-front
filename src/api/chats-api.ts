import RestClient from '@/util/rest-client.ts';

export class ChatsApi {
  static getChatsByUserId(id: string) {
    return RestClient.get(`/chats/${id}`);
  }
}
