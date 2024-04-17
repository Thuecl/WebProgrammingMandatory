import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSelector } from '@reduxjs/toolkit';

const apiKey = '4a1b3ba9a25db4f9afee79712a2a8959';
// const requestToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTFiM2JhOWEyNWRiNGY5YWZlZTc5NzEyYTJhODk1OSIsInN1YiI6IjY1Zjg1MmEyMjg3MjNjMDE3Y2JhNTJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5uytgUbOz_EAg76H_SV6dRbtbacmBFxSHwsn51W10k';

export const movieApi = createApi({

    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3`,
    }),

    endpoints: (builder) => ({

        getMovie: builder.query({
            query: () => `/discover/movie?api_key=${apiKey}`,
        }),

    }),

});

export const { useGetMovieQuery } = movieApi;

export const selectMovies = createSelector(

    (state) => state.movieApi,
    (movieApi) => movieApi.getMovie
)

export const fetchAllMovies = async (dispatch) => {

    try {
        const response = await dispatch(movieApi.endpoints.getMovie.initiate());
        console.log(response.data);
    }

    catch (error) {

        console.log(error);
    }
};

