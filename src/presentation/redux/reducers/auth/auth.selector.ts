// import { createSelector } from "reselect";
import { RootState } from '../../store';

export const authSelector = (state: RootState) => state.auth;

export const getLoginData = (state: RootState) => state.auth.loginData;

export const getRegisterData = (state: RootState) => state.auth.registerData;

// export const getLoginData = createSelector(
//   [(state: RootState) => state.auth.loginData],
//   loginData => {
//     return loginData
//   }
// )

// export const getRegisterData = createSelector(
//   [(state: RootState) => state.auth.registerData],
//   registerData => {
//     return registerData
//   }
// )
