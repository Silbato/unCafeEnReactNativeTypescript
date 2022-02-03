import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Producto } from '../interfaces/appInterfaces';
import { styles } from '../temas/themes';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';




const ProductoItem = (prod: Producto) => {

    const navigator = useNavigation();
    const { nombre, precio, categoria, usuario, _id } = prod;

    return (
        <TouchableOpacity activeOpacity={.8} style={sty.botonProducto}  >
            <View style={{}}>

            </View>
            <View style={{}}>
                <Text style={sty.tituloProducto}>{nombre} </Text>
                <Text style={sty.precio}>{precio}</Text>
                <Text style={sty.categoria}>{categoria.nombre}</Text>
                <Text style={sty.nombreUser}>{usuario.nombre}</Text>
            </View>
            <View style={{}}>

            </View>
        </TouchableOpacity>

    );
};

const sty = StyleSheet.create({
    botonProducto: {
        flex: 1,
        backgroundColor: 'rgba(121, 185, 246, 0.61)',
        height: 80,
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        flexDirection: 'column'
    },
    tituloProducto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    precio: {
        color: 'gray',
        fontSize: 20,
    },
    categoria: {
        color: 'tomato',
        fontSize: 12,
    },
    nombreUser: {
        color: 'black',
        fontSize: 10
    }
})

export default ProductoItem;
