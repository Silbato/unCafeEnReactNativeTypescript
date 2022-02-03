import { View, Text, AppRegistry } from 'react-native';
import React, { useEffect, useState } from 'react';

import cafeapi from '../api/apiCafe';
import { Categoria, CategoriasResponse } from '../interfaces/appInterfaces';

const useCategories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await cafeapi.get<CategoriasResponse>('/api/categorias');
        setCategorias(response.data.categorias);
        setIsLoading(false);
    }
    return {
        categorias,
        isLoading
    };
};

export default useCategories;
