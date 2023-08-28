'use client'
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from "../../../features/api/pokemon";
import counterReducer from '../../../features/counter/counterSlice';


// configure store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(pokemonApi.middleware),
});