import axios from 'axios';
import i18n from '../../../i18n';

axios.interceptors.request.use(
  config => {
    console.log('Starting Request:', config);
    const locale = i18n.language;
    config.headers['Accept-Language'] = locale;
    return config;
    console.log(locale);
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default axios;
