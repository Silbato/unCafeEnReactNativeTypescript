import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

const LoadingScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={50} color='green' />
            <Text style={{ color: 'gray' }}>Cargando</Text>
        </View>
    );
};

export default LoadingScreen;
