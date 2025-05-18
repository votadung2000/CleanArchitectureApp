import { inject, injectable } from 'inversify';

import TYPES from '../../../di/types';
import type { ILoginRepository } from '../../../domain/usecases/authUseCase/loginUseCase';
import { ILoginParams } from './login_params';

@injectable()
export class LoginHandler {
  constructor(
    @inject(TYPES.ILoginRepository)
    private readonly loginRepository: ILoginRepository
  ) {}

  async login(params: ILoginParams) {
    return this.loginRepository?.login(params);
  }
}
