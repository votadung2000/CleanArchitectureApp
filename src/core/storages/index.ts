import AsyncStorage from '@react-native-async-storage/async-storage';

const _TOKEN = '@TOKEN';

export const setToken = (token: string) => {
  return AsyncStorage.setItem(_TOKEN, token);
};

export const getToken = () => {
  return AsyncStorage.getItem(_TOKEN);
};

export const clearToken = () => {
  return AsyncStorage.removeItem(_TOKEN);
};
