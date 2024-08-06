import RestClient from '@/util/rest-client.ts';

export class MessagesApi {
  static getMessagesByChatId(id: string) {
    return RestClient.get(`/messages/${id}`);
  }
}
