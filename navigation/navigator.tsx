import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ProtectesScreen from '../screens/ProtectesScreen';
import Register from '../screens/Register';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { AuthContext } from '../src/context/AuthContext';
import LoadingScreen from '../screens/LoadingScreen';
import ProductsNavigator from './ProductsNavigator';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    const { status } = useContext(AuthContext);

    if (status === 'checking') {
        return <LoadingScreen />
    }
    return (
        <Stack.Navigator

            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
                headerShown: false
            }}
        >
            {/**Verificamos el estatus del usuario del useContext para habilitarle que Screems puede ver */
                (status !== 'authenticated')
                    ?
                    (
                        <>
                            <Stack.Screen name='LoginScreen' component={LoginScreen} />
                            <Stack.Screen name="HomeScreen" component={HomeScreen} />
                            <Stack.Screen name="Register" component={Register} />
                        </>
                    )
                    :
                    (
                        <>
                            <Stack.Screen name='ProductsNavigator' component={ProductsNavigator} />
                            <Stack.Screen name='ProtectedScreen' component={ProtectesScreen} />
                        </>
                    )
            }


        </Stack.Navigator>
    );
};


