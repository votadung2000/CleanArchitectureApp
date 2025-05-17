import { Platform } from 'react-native';
import {
  getSystemVersion,
  getVersion,
} from 'react-native-device-info';
import uuid from 'react-native-uuid';

import axios from '../../../core/api/Api';
import { Login, Register } from '../../../domain/entities/auth';
import ApiRoutes from '../../../core/api/ApiRoutes';

interface ApiPrams {
  [key: string]: any;
}

const infoDevices = {
  unique_id: uuid.v4(),
  device_info: {
    os: Platform.OS === 'android' ? 2 : 1,
    ver: getSystemVersion(),
  },
  app_info: {
    os: Platform.OS === 'android' ? 2 : 1,
    ver: getVersion(),
  },
};

export const AuthApi = {
  login: async (params: ApiPrams): Promise<Login> => {
    const data = { ...params, ...infoDevices };
    const res = await axios.post(ApiRoutes.login, data);
    return res.data;
  },

  register: async (params: ApiPrams): Promise<Register> => {
    const data = { ...params, ...infoDevices };
    const res = await axios.post(ApiRoutes.register, data);
    return res.data;
  },
};
