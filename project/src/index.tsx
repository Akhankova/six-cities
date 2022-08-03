import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import offers from './mocks/offers';
import { createAPI } from './services/api';
import { rootReducer } from './store/root-reducer';

const MainSetting = {
  OFFERS: offers,
};

export const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}><App offers={MainSetting.OFFERS}/></Provider>
  </React.StrictMode>,
);
