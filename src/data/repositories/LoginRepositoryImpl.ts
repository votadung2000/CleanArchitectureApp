import { injectable } from 'inversify';

import { ILoginRepository } from '../../domain/usecases/authUseCase/loginUseCase';
import { ILoginParams } from '../../applications/auth/command/login_params';
import { AuthApi } from '../datasources/remote/AuthApi';

@injectable()
export class LoginRepositoryImpl implements ILoginRepository {
  async login(params: ILoginParams): Promise<any> {
    const response = await AuthApi.login(params);
    return response;
  }
}
