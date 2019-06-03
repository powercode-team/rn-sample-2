import { create } from 'apisauce';
import requestUrl from '../constants/requestUrl';

const api = create({
  baseURL: requestUrl.baseApiUrl,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  timeout: 30000,
});

class NetworkService {
  static setTokenInHeader = token =>
    api.setHeader('Authorization', `Bearer ${token}`);
}

export default NetworkService;
