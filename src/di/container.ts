import { Container } from 'inversify';

import TYPES from './types';

import { LoginHandler } from '../applications/auth/command/login_handler';
import { ILoginRepository } from '../domain/usecases/authUseCase/loginUseCase';
import { LoginRepositoryImpl } from '../data/repositories/LoginRepositoryImpl';

const container = new Container();

container.bind<ILoginRepository>(TYPES.ILoginRepository).to(LoginRepositoryImpl);
container.bind<LoginHandler>(TYPES.LoginHandler).to(LoginHandler);

export { container };
