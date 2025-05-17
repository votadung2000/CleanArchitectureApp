import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import {
    authReducer,
} from './reducers/index';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
