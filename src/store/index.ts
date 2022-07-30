import { configureStore } from '@reduxjs/toolkit';
import { dappletsApi } from './dapplets/dapplets.api';

export const store = configureStore({
  reducer: {
    [dappletsApi.reducerPath]: dappletsApi.reducer,
  },
});
