import { fetchApiLogin } from '../../../presentation/redux/reducers';
import { AppDispatch } from '../../../presentation/redux/store';
import { LoginParams } from '../../entities/auth';

export const loginUser = async (dispatch: AppDispatch, params: LoginParams) => {
  const response = await dispatch(fetchApiLogin(params));
  return response.payload;
};
