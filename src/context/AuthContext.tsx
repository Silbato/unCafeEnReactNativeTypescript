import { View, Text } from 'react-native';
import React, { createContext, useEffect, useReducer } from 'react';
import { Error, ErrorResponse, logInData, LoginResponse, registerData, RegisterResponse, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
import cafeapi from '../api/apiCafe';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';

/**Esto va a ser lo que devuelve el reducer con  */
type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    registrarse: (registrarse: registerData) => void;
    signUp: (loginData: logInData) => void;
    logOut: () => void;
    removeError: () => void;
}
export const AuthContext = createContext({} as AuthContextProps);


const estadoInicial: AuthState = {
    status: 'checking',
    user: null,
    token: null,
    errorMessage: '',
}

export const AuthProvider = ({ children }: any) => {

    /**Despues de definir el authReducer */
    const [state, dispatch] = useReducer(authReducer, estadoInicial);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        /**No token disponible o inexistente */
        if (!token) { return dispatch({ type: 'notAuthenticated' }) };
        /**Hay token, pero pide otro al la api */
        const resp = await cafeapi.get('/api/auth');
        if (resp.status !== 200) {
            return dispatch({ type: 'notAuthenticated' });
        }
        /**En cada check le asigna un nuevo token */
        await AsyncStorage.setItem('token', resp.data.token);
        /**Este le cambia de checking to authenticated */
        dispatch({
            type: 'signIn',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });
    }

    const signUp = async ({ correo, password }: logInData) => {
        try {
            const { data } = await cafeapi.post<LoginResponse>('/api/auth/login', { correo, password });
            console.log(data);
            /**Guardamos en el AsynStorage */
            await AsyncStorage.setItem('token', data.token);
            /**El dispatch usa el signUp del reducer, para que le asigne los datos al estado del usuario y su token     */
            dispatch({ type: 'signIn', payload: { token: data.token, user: data.usuario } });


        } catch (error: any) {
            if (error.response) {
                //console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
            //console.log(`${error}     (Entró al catch) :   ${error.toJSON()} `);
            const lista = error.response.data.errors;
            const str = lista.map((e: Error) => { return e.msg });
            const cadena = str.join(', ');

            //dispatch({ type: 'addError', payload: JSON.stringify(str) || 'Informacion Incorrecta' });
            /**Prueba para ver como funciona el join() */
            dispatch({ type: 'addError', payload: cadena || 'Informacion Incorrecta' });
        }

    };
    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logOut' });
        console.log('LogOut del authContext');
    };
    const removeError = () => {
        dispatch({ type: 'removeError' });
    };
    const registrarse = async ({ correo, password, nombre }: registerData) => {
        try {
            const { data } = await cafeapi.post<RegisterResponse>('/api/usuarios', { nombre, password, correo });
            dispatch({ type: 'signIn', payload: { token: data.token, user: data.usuario } });
            await AsyncStorage.setItem('token', data.token);
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            const lista = error.response.data.errors;
            const str = lista.map((e: Error) => { return e.msg });
            const cadena = str.join(', ');
            dispatch({ type: 'addError', payload: cadena || 'Informacion Incorrecta' });

        }
    }

    /**El value me pide todos los datos que defini en AuthContextProps */
    return (
        <AuthContext.Provider value={{ ...state, signUp, logOut, removeError, registrarse }}>
            {children}
        </AuthContext.Provider>
    );
};

