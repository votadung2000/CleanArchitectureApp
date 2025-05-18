import { createSlice } from '@reduxjs/toolkit';

import {
    fetchApiLogin,
    fetchApiRegister,
} from './auth.api';
import { LoginData, RegisterData } from './auth.types';

const loginData: LoginData = {
    isLoadingAuth: false,
};

const registerData: RegisterData = {
    isLoadingRegis: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginData,
        registerData,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchApiLogin.pending, (state) => {
                state.loginData.isLoadingAuth = true;
            })
            .addCase(fetchApiLogin.fulfilled, (state, action) => {
                state.loginData.isLoadingAuth = false;
                state.loginData = action.payload;
            })
            .addCase(fetchApiLogin.rejected, (state) => {
                state.loginData.isLoadingAuth = false;
            })

            .addCase(fetchApiRegister.pending, (state) => {
                state.registerData.isLoadingRegis = true;
            })
            .addCase(fetchApiRegister.fulfilled, (state, action) => {
                state.registerData.isLoadingRegis = false;
                state.registerData.data = action.payload.data;
            })
            .addCase(fetchApiRegister.rejected, (state) => {
                state.registerData.isLoadingRegis = false;
            });
    },
});

export const authReducer = authSlice.reducer;

export const { } = authSlice.actions;
