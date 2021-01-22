import axios from 'axios';
import handleError from 'helpers/HandleError';

import secureStorage from 'helpers/SecureStorage';

const getInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    timeout: process.env.REACT_APP_TIMEOUT || 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const newConfig = config;
      const data = secureStorage.getItem(process.env.REACT_APP_KEY);

      if (data) {
        const token = data.attributes.auth_token;
        newConfig.headers.Authorization = `Bearer ${token}`;
      }
      return newConfig;
    },
    (error) => Promise.reject(error)
  );
  return instance;
};

const httpRequest = (method, path, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    getInstance()
      [method](path, data, headers)
      .then((response) => resolve(response))
      .catch((error) => reject(handleError(error)));
  });
};

export default {
  get(path, data, headers) {
    return httpRequest('get', path, data, headers);
  },
  post(path, data, headers) {
    return httpRequest('post', path, data, headers);
  },
  put(path, data, headers) {
    return httpRequest('put', path, data, headers);
  },
  delete(path, data, headers) {
    return httpRequest('delete', path, data, headers);
  },
  patch(path, data, headers) {
    return httpRequest('patch', path, data, headers);
  },
};
