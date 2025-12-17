import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import LoginScreenAlt from '../screens/LoginScreenAlt';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="LoginAlt" component={LoginScreenAlt} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
