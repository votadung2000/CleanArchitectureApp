import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens';

import routes from './routes';

const AppContainer = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            {
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            gestureEnabled: false,
                            animation: 'slide_from_right',
                        }}
                    >
                        <Stack.Screen name={routes.LoginScreen} component={LoginScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppContainer;
