import axios, { AxiosRequestConfig } from 'axios';

const client = axios.create({
  baseURL: 'http://127.0.0.1:3003',
});

class RestClient {
  static get = (url: string, config?: AxiosRequestConfig<unknown>|undefined) => {
    return client.get(url, config);
  };

  static post = (url: string, data: unknown, config?:AxiosRequestConfig<unknown>|undefined) => {
    return client.post(url, data, config);
  };
	//TODO: fix options
  static put = (url: string, options: unknown) => {
    return client.put(url, options);
  };

  static patch = (url: string, options: unknown) => {
    return client.patch(url, options);
  };

  static delete = (url: string, config?: AxiosRequestConfig) => {
    return client.delete(url, config);
  };
}

export default RestClient;
