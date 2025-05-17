import { Login, Register } from '../../../../domain/entities/auth';

export interface LoginData extends Login{
  isLoadingAuth?: boolean;
}

export interface RegisterData extends Register{
  isLoadingRegis?: boolean;
}
