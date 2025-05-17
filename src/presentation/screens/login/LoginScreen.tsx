import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useFormik } from 'formik';

import {
  Input,
  Text,
  Button,
} from '../../components';
import { colors, fontSize } from '../../../core/constants';
import { hScale, scale } from '../../../core/utils/resolutions';
import { useAppDispatch } from '../../redux/store';
// import { fetchApiLogin, fetchApiUserProfile } from '@reducers';

import LoginSchema from './LoginSchema';

interface FormValues {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

interface LoadingState {
  isVisible: boolean;
  onModalHide?: () => void;
}

const initialValues: FormValues = {
  username: 'register1',
  password: 'register1',
};

const initialErrors: FormErrors = {
  username: '',
  password: '',
};

const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const {
    values,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues,
    initialErrors,
    validationSchema: LoginSchema,
    onSubmit: () => onSubmit(),
  });

  const onSubmit = async () => {

  };

  const onChangeUsername = (text: string) => {
    setFieldValue("username", text)
  }

  const onChangePassword = (text: string) => {
    setFieldValue("password", text)
  }

  return (
    <View style={styles.container}>
      <Text bold style={styles.title}>
        {'Login'}
      </Text>
      <View style={styles.form}>
        <TextInput
          value={values.username}
          autoCapitalize="none"
          placeholderTextColor={colors.gray_C4C4C4}
          placeholder='Username'
          style={styles.input}
          onChangeText={text => onChangeUsername(text)}
        />
        <TextInput
          value={values.password}
          autoCapitalize="none"
          placeholderTextColor={colors.gray_C4C4C4}
          placeholder='Password'
          style={styles.input}
          onChangeText={text => onChangePassword(text)}
        />
      </View>
      <Button
        style={styles.btnLogin}
        onPress={() => handleSubmit()}>
        <Text bold style={styles.textLogin}>
          {'LOGIN'}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: scale(20),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingBottom: scale(50),
  },
  title: {
    fontSize: fontSize.fontSize34,
    textAlign: 'left',
    marginTop: scale(50),
  },
  form: {
    marginTop: scale(25),
  },
  input: {
    height: hScale(48),
    color: colors.black,
    fontSize: fontSize.fontSize16,
    borderColor: colors.gray_EEEEEE,
    borderWidth: 1,
    padding: 0,
    paddingLeft: scale(20),
    paddingRight: scale(10),
    marginBottom: scale(20),
  },
  btnLogin: {
    width: '80%',
    height: hScale(48),
    borderRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange_FD724C,
    marginTop: scale(25),
    alignSelf: 'center',
  },
  textLogin: {
    fontSize: fontSize.fontSize14,
    color: colors.white,
  },
});

export default LoginScreen;
