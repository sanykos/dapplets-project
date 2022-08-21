import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse } from './interfaces';

// https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0&filter=[{"property":"title","value":"privacy"}]&sort=[{"property":"title","direction":"ASC"}]
export const dappletsApi = createApi({
  reducerPath: 'dapplets/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dapplets-hiring-api.herokuapp.com/api/v1',
  }),
  endpoints: (build) => ({
    search: build.query<IResponse, { search: string; limit: number }>({
      query: ({ search, limit }) => ({
        url: '/dapplets',
        params: {
          limit,
          start: 0,
          filter: JSON.stringify([
            { property: 'title', value: search || 'privacy' },
          ]),
          sort: JSON.stringify([{ property: 'title', direction: 'ASC' }]),
        },
      }),
    }),
  }),
});

export const { useSearchQuery } = dappletsApi;
