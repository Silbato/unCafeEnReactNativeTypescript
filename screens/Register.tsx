import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Background from '../src/componentes/Background';
import { styles } from '../src/temas/themes';
import WhiteLogo from '../src/componentes/WhiteLogo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from '../src/hooks/useForm';
import { AuthContext } from '../src/context/AuthContext';

interface Props extends NativeStackScreenProps<any, any> { }



const Register = ({ navigation }: Props) => {

    const { email, password, name, onChange } = useForm({ email: '', password: '', name: '' });

    const { registrarse, errorMessage, removeError } = useContext(AuthContext);
    const onRegister = () => {
        console.log('Se apreto un boton    ' + `${email}  ${password} ${name}`);
        Keyboard.dismiss();
    }

    const enviarForm = () => {
        /**Aca envio los datos de registro */
        registrarse({ correo: email, nombre: name, password });

        console.log('Se apreto un boton    ' + `${email}  ${password} ${name}`);
    }
    useEffect(() => {
        if (errorMessage.length === 0) { return; }
        Alert.alert('Registro Incorrecto', errorMessage, [{ text: 'OK', onPress: removeError }]);


    }, [errorMessage]);


    return (
        <>
            <Background />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={styles.cardLoginContainer}>
                    <WhiteLogo />
                    {/**email y pass TextInputs */}
                    <Text style={styles.textoAzul}>Nuevo Usuario</Text>
                    <Text style={styles.textoGris}>Email</Text>
                    <TextInput placeholder='Ingrese su Nick' placeholderTextColor={'white'} underlineColorAndroid={'white'} autoCorrect={false} keyboardType='email-address'
                        onSubmitEditing={onRegister}
                        onChangeText={(value) => onChange(value, 'email')}
                    ></TextInput>
                    <Text style={styles.textoGris}>Nick</Text>
                    <TextInput placeholder='Ingrese su email' placeholderTextColor={'white'} underlineColorAndroid={'white'} autoCapitalize='none' autoCorrect={false}
                        onSubmitEditing={onRegister}
                        onChangeText={(value) => onChange(value, 'name')}
                    ></TextInput>
                    <Text style={styles.textoGris}>Password</Text>
                    <TextInput placeholder='Ingrese su contraseña' placeholderTextColor={'white'} underlineColorAndroid={'white'}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onSubmitEditing={onRegister}
                        onChangeText={(value) => onChange(value, 'password')} value={password}
                    ></TextInput>
                    {/**Container botones */}
                    <View style={{ alignItems: 'center', marginTop: 30 }}>

                        {/**Navegacion a RegistroScreen */}
                        <TouchableOpacity activeOpacity={.5} style={styles.botonCeleste} onPress={enviarForm}>
                            <Text style={styles.textoBotonCeleste}>Crear Cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};


export default Register;