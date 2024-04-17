import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {movieApi} from './api/query';
import {setupListeners} from '@reduxjs/toolkit/query';
import counterReducer from './features/counterSlice';

export const store = configureStore({

reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    counter: counterReducer,
}, 

middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware, thunk),

});

setupListeners(store.dispatch);