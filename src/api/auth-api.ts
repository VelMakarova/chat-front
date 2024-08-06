import RestClient from '@/util/rest-client.ts';

export class AuthApi {
  static getUser(accessToken: string) {
    return RestClient.get('/auth', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
	static finishReg(accessToken: string, data: any) {
		const config = {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		};
		return RestClient.post(
			'/auth',
			data,
			config
		);
	}
}
