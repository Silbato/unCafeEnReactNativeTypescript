import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useContext, useEffect } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/types';
import { ProductContext } from '../src/context/ProductContext';


/**Cuando le pasamos los parametros con las pantaallas y los tipos  de datos que acepta...
 * en el segundo parametro aclaramos cual pantalla usaremos */
interface Props extends NativeStackScreenProps<RootStackParamsList, 'ProductScreen'> { };

const ProductScreen = ({ navigation, route }: Props) => {
    const { id = '', name = '' } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: (name) ? `Articulo: ${name}` : 'Nuevo Producto' })
    }, []);

    const { loadProductById } = useContext(ProductContext);
    useEffect(() => {
        LoadProduct
    }, []);
    const LoadProduct = async () => {
        if (id.length === 0) {
            return;
        } else {
            const resp = await loadProductById(id);
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text >Producto:</Text>

                <Text style={styles.label}>{name}</Text>
                <Text>{id}</Text>
                <TextInput style={styles.textInput} placeholder='Producto' />


                <Text style={styles.label}>{name}</Text>
                <Text>{id}</Text>
                <TextInput style={styles.textInput} placeholder='Producto' />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18,
        color: 'rgba(31, 82, 210, 0.8)',
        fontWeight: 'bold'
    },
    id: {
        fontSize: 10,
        color: 'rgba(31, 82, 210, 0.43)',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: 'rgba(31, 82, 210, 0.3)',
        height: 45,
        marginTop: 5
    }

})

export default ProductScreen;
