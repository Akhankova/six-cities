import axios from 'axios';

export const BACKEND_URL = 'https://8.react.pages.academy/six-cities';

const TIME_OUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT,
  });

  return api;
};


