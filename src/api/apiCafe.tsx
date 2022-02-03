import { View, Text } from 'react-native';
import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
/*
const baseURL = 'http://192.168.0.1:8080/';
*/
const baseURL = 'https://cafedb.herokuapp.com';

const cafeapi = axios.create({ baseURL });

cafeapi.interceptors.request.use(
    async (config: any) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;

        }
        return config;
    }
)
export default cafeapi;
