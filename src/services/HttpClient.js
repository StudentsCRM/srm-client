import axios from 'axios';

// Intitiate axios instance

export const Http = axios.create({});

const setRequestHeader = (config) => {
  return config;
};

// Request interceptor
Http.interceptors.request.use(
  async function (request) {
    return setRequestHeader(request);
  },
  function (error) {
    return Promise.reject(error);
  }
);

//Response Interceptor
Http.interceptors.response.use(
  async function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const Methods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};

export class HttpClient {
  request = (method, baseURL, url, data) => {
    return Http({
      url,
      baseURL,
      method,
      header: { Accept: 'application/json' },
      data,
    });
  };
}
