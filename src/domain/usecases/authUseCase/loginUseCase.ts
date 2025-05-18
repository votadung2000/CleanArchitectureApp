import { ILoginParams } from '../../../applications/auth/command/login_params';
import { Login } from '../../entities/auth';

export interface ILoginRepository {
  login(params: ILoginParams): Promise<Login>
}
