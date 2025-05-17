import { createAsyncThunk } from '@reduxjs/toolkit';

import { alertErrorApi } from '../../../../common';
import { AuthApi } from '../../../../data/datasources/remote/AuthApi';

export const fetchApiLogin = createAsyncThunk(
    'auth/fetchApiLogin',
    async (params: any, { rejectWithValue }) => {
        try {
            const response = await alertErrorApi(() => AuthApi.login(params));
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchApiRegister = createAsyncThunk(
    'auth/fetchApiRegister',
    async (params: any, { rejectWithValue }) => {
        try {
            const response = await alertErrorApi(() => AuthApi.register(params));
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
