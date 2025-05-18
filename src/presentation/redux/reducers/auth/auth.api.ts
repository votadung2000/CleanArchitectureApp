import { createAsyncThunk } from '@reduxjs/toolkit';

import { alertErrorApi } from '../../../../common';
import { AuthApi } from '../../../../data/datasources/remote/AuthApi';
import { container } from '../../../../di/container';
import TYPES from '../../../../di/types';
import { LoginHandler } from '../../../../applications/auth/command/login_handler';
import { ILoginParams } from '../../../../applications/auth/command/login_params';

export const fetchApiLogin = createAsyncThunk(
    'auth/fetchApiLogin',
    async (params: ILoginParams, { rejectWithValue }) => {
        try {
            const handler = container.get<LoginHandler>(TYPES.LoginHandler);
            const response = await handler.login(params);
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
