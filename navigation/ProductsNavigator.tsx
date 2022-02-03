import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { ProductoParams, RootStackParamsList, StackNavigatorProductsScreenParams } from './types';
import { createNavigationContainerRef } from '@react-navigation/native';
import NewProduct from '../screens/NewProduct';

/**Este crea el tipo de datos que se pasan o necesita cada pantalla...despues lo usamos para recuperar el route,navigate en otras pantallas */

const Stack = createNativeStackNavigator<StackNavigatorProductsScreenParams>();

export const navigationRef = createNavigationContainerRef<RootStackParamsList>();
export function navigate(name: keyof RootStackParamsList, params?: ProductoParams) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}
const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },


            }}

        >
            <Stack.Screen name='ProductsScreen' component={ProductsScreen} options={{ title: 'Productos' }} />
            <Stack.Screen name='ProductScreen' component={ProductScreen} options={{ title: 'Producto' }} />
            <Stack.Screen name='NewProduct' component={NewProduct} options={{ title: 'Nuevo' }} />
        </Stack.Navigator>
    );
};

export default ProductsNavigator;
