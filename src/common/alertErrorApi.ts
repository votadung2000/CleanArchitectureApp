import { Alert } from 'react-native';

const alertErrorApi = (error: any) => {
    const title = error?.message || 'Please check your network connection';
    Alert.alert('Alert Error', title, [
        {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
    ]);
};

export default alertErrorApi