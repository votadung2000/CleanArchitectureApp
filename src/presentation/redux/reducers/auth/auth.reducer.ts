import { createSlice } from '@reduxjs/toolkit';

import {
    fetchApiLogin,
    fetchApiRegister,
} from './auth.api';
import { LoginData, RegisterData } from './auth.types';

const loginData: LoginData = {
    isLoadingAuth: false,
};

const regisData: RegisterData = {
    isLoadingRegis: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: loginData,
        regis: regisData,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchApiLogin.pending, (state) => {
                state.auth.isLoadingAuth = true;
            })
            .addCase(fetchApiLogin.fulfilled, (state, action) => {
                state.auth.isLoadingAuth = false;
                state.auth = action.payload;
            })
            .addCase(fetchApiLogin.rejected, (state) => {
                state.auth.isLoadingAuth = false;
            })

            .addCase(fetchApiRegister.pending, (state) => {
                state.regis.isLoadingRegis = true;
            })
            .addCase(fetchApiRegister.fulfilled, (state, action) => {
                state.regis.isLoadingRegis = false;
                state.regis.data = action.payload.data;
            })
            .addCase(fetchApiRegister.rejected, (state) => {
                state.regis.isLoadingRegis = false;
            });
    },
});

export const authReducer = authSlice.reducer;

export const { } = authSlice.actions;
