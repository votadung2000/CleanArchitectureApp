export interface LoginParams {
  user_name: string;
  password: string;
}
export interface Login {
  token?: string;
  created?: string;
  expiry?: number;
}

export interface Register {
    data?: boolean;
}
