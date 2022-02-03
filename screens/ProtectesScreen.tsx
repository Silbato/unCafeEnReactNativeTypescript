import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../src/context/AuthContext';

const ProtectesScreen = () => {

    const { logOut, user, token } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Protected Screen</Text>

            <Button title='logout' color={'blue'} onPress={logOut} />
            <Text>{JSON.stringify(token)}</Text>
            <Text>{JSON.stringify(user, null, 5)}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'red'
    }
});
export default ProtectesScreen;
