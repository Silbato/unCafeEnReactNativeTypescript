import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../src/context/ProductContext';
import ProductoItem from '../src/componentes/ProductoItem';
import { Producto } from '../src/interfaces/appInterfaces';
import { styles } from '../src/temas/themes';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/types';




/*Como ya lo tengo en las props*/
interface Prosp extends NativeStackScreenProps<RootStackParamsList, 'ProductsScreen'> { };


/**Ahora se puede usar el Props de arriba y obtener el navigate */
const ProductsScreen = ({ navigation }: Prosp) => {
    const { products } = useContext(ProductContext);

    /**Creamos un useEffect para  */

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={.8} style={{ marginRight: 10 }} onPress={() => { navigation.navigate('NewProduct') }}>
                    <Text>Agregar</Text>
                </TouchableOpacity>
            )
        })
    }, []);


    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <FlatList
                data={products}
                keyExtractor={e => e._id}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={.5} style={sty.botonProducto} onPress={() => { navigation.navigate('ProductScreen', { id: item._id, name: item.nombre }) }}>
                        <Text style={sty.tituloProducto}>{item.nombre} </Text>
                        <Text style={sty.precio}>{item.precio}</Text>
                        <Text style={sty.categoria}>{item.categoria.nombre}</Text>
                        <Text style={sty.nombreUser}>{item.usuario.nombre}</Text>
                    </TouchableOpacity>}
                ItemSeparatorComponent={() => <View style={sty.separator} />}
            />
            <Text>Lista Productos Screen</Text>
        </View>
    );
};


const sty = StyleSheet.create({
    separator: {
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderBottomWidth: 3,
        marginTop: 3
    },
    botonProducto: {
        flex: 1,
        backgroundColor: 'rgba(121, 185, 246, 0.61)',
        height: 80,
        borderRadius: 20,

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

});



export default ProductsScreen;