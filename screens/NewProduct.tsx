import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import useCategories from '../src/hooks/useCategories';
import { useForm } from '../src/hooks/useForm';

const NewProduct = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const { categorias, isLoading } = useCategories();

    /**El form que definimos pasandole los parametros */
    /**El useForm devuelve tmb un "form" que es el estado actual del useForm() */
    const { _id, categoriaId, nombre, img, form, onChange } = useForm({
        _id: '',
        categoriaId: '',
        nombre: '',
        img: ''
    });
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Producto:</Text>
                <TextInput style={styles.textInput}
                    placeholder='Producto'
                    value={nombre}
                    onChangeText={(value) => onChange(value, 'nombre')}
                />
                <Text style={styles.label}>Categoria:</Text>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    {
                        categorias.map(c => (

                            /**<Picker.Item label="Java" value="java" /> */
                            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
                        ))
                    }


                </Picker>

                <Button title="Guardar" onPress={() => { }} color='rgba(31, 82, 210, 0.2)' />
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
                    <Button title="Galeria" onPress={() => { }} color='rgba(31, 82, 210, 0.2)' />
                    <Button title="Camara" onPress={() => { }} color='rgba(31, 82, 210, 0.2)' />
                </View>

                <Text>{JSON.stringify(form, null, 8)}</Text>
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
export default NewProduct;
