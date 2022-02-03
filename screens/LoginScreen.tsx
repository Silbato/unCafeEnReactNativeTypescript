import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Background from '../src/componentes/Background';
import WhiteLogo from '../src/componentes/WhiteLogo';
import { styles } from '../src/temas/themes';
import { useForm } from '../src/hooks/useForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthContext } from '../src/context/AuthContext';

interface Props extends NativeStackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {
    const { signUp, errorMessage, removeError } = useContext(AuthContext);


    /**Usamos el hook para fromularios */
    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });
    /**Creamos una funcion */
    const onLogin = () => {
        console.log(`Email ingresado "${email}", Password: "${password}"`);
        /**Inportar Keyboard para sacarlo despues de apretar el boton de Login */
        Keyboard.dismiss();
        signUp({ correo: email, password: password });
    }

    /**El useEffect cuando se reciba algun error */
    useEffect(() => {
        if (errorMessage.length === 0) {
            return;
        } else {
            /**El errorMessage es del context que lo usa el useEffect */
            Alert.alert('Titulo De la Alerte:', errorMessage, [{ text: 'Ok', onPress: removeError }]);
        }
    }, [errorMessage]);




    return (
        <>
            <Background />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={styles.cardLoginContainer}>
                    <WhiteLogo />
                    {/**email y pass TextInputs */}
                    <Text style={styles.textoAzul}>Login</Text>
                    <Text style={styles.textoGris}>Email</Text>
                    <TextInput placeholder='Ingrese su email' placeholderTextColor={'white'} underlineColorAndroid={'white'} autoCorrect={false} keyboardType='email-address'
                        onSubmitEditing={onLogin}
                        onChangeText={(value) => onChange(value, 'email')}
                    ></TextInput>
                    <Text style={styles.textoGris}>Password</Text>
                    <TextInput placeholder='Ingrese su contraseña' placeholderTextColor={'white'} underlineColorAndroid={'white'}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onSubmitEditing={onLogin}
                        onChangeText={(value) => onChange(value, 'password')} value={password}
                    ></TextInput>
                    {/**Container botones */}
                    <View style={styles.botonContainer}>
                        <TouchableOpacity activeOpacity={.60} style={styles.botonCeleste} onPress={onLogin} >
                            <Text style={styles.textoBotonCeleste}>Ingresar</Text>
                        </TouchableOpacity>
                        {/**Navegacion a RegistroScreen */}
                        <TouchableOpacity activeOpacity={.5} style={styles.botonCeleste} onPress={() => { navigation.replace('Register') }}>
                            <Text style={styles.textoBotonCeleste}>Crear Cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default LoginScreen;
