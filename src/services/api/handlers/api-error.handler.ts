import { AxiosError } from 'axios';

export class ApiErrorHandler {
  static handle(error: AxiosError) {
    switch (error.response?.status) {
      case 400:
        console.error('Bad Request');
        break;

      case 401:
        console.error('Unauthorized');
        break;

      case 403:
        console.error('Forbidden');
        break;

      case 404:
        console.error('Not Found');
        break;

      case 500:
        console.error('Internal Server Error');
        break;

      default:
        console.error('Unexpected Error');
    }

    return Promise.reject(error);
  }
}