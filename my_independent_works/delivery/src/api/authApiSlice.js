
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
    reducerPath: 'auth',
<<<<<<< HEAD
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
=======
    baseQuery: fetchBaseQuery({ baseUrl: 'http://www.localhost:3001' }),
>>>>>>> c3abeb9b53c402797e8d638f5d6fe822cf55cae1
    tagTypes: ['Authorization'],
    endpoints: builder => ({
        getAuth: builder.query({
            query: () => '/auth',
            providesTags: ['Authorization']
        }),
        createAuth: builder.mutation({
            query: auth => ({
                url: '/auth',
                method: "POST",
                body: auth
            }),
            invalidatesTags: ['Delivery']
        }),
        deleteAuth: builder.mutation({
            query: id => ({
                url: `/auth/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Authorization']
        }),
    })
});

export const { useGetAuthQuery, useCreateAuthMutation, useDeleteAuthMutation } = authSlice;
