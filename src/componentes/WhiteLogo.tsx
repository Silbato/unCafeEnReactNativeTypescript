import { View, Text, Image } from 'react-native';
import React from 'react';

const WhiteLogo = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../Images/reactLogo2.png')} style={{ width: 110, height: 100 }} />
        </View>
    );
};

export default WhiteLogo;
