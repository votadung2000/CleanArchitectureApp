import { authReducer } from './auth.reducer';
import { authSelector, getLoginData, getRegisterData } from './auth.selector';
import { fetchApiLogin, fetchApiRegister } from './auth.api';

export {
    authReducer,

    authSelector,
    getLoginData,
    getRegisterData,

    fetchApiLogin,
    fetchApiRegister,
};
