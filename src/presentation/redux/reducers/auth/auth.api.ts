import { createAsyncThunk } from '@reduxjs/toolkit';

// import { ApiLogin, ApiRegister } from '@api';
import { alertErrorApi } from '../../../../common';

export const fetchApiLogin = createAsyncThunk(
    'auth/fetchApiLogin',
    async (data: any = {}, { rejectWithValue }) => {
        try {
            // const response = await alertErrorApi(() => ApiLogin(data));
            // return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchApiRegister = createAsyncThunk(
    'auth/fetchApiRegister',
    async (data: any = {}, { rejectWithValue }) => {
        try {
            // const response = await alertErrorApi(() => ApiRegister(data));
            // return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
