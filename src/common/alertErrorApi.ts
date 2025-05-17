import { Alert } from 'react-native';

async function alertErrorApi<T>(apiCall: () => Promise<T>): Promise<T> {
    try {
        return await apiCall();
    } catch (error: any) {
        const title = error?.message || 'Please check your network connection';
        Alert.alert('Alert Error', title, [
            {
                text: 'OK',
                style: 'cancel',
            },
        ]);
        throw error;
    }
}

export default alertErrorApi;
