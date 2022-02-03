import { View, Text } from 'react-native';
import React from 'react';

const background = () => {
    return (
        <View style={{ position: 'absolute', backgroundColor: '#FF5733', width: 1000, height: 1200, borderRadius: 100, transform: [{ rotate: '-80deg' }] }}>
            <Text></Text>
        </View>
    );
};

export default background;
