import RestClient from '@/util/rest-client.ts';
export class UsersApi {
  static getAllUsers() {
    return RestClient.get('users');
  }
  static getUserById(id: string) {
    return RestClient.get(`users/${id}`);
  }
}
