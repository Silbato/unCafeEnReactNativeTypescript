

import { View, Text } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import { ListaProdResponse, Producto } from '../interfaces/appInterfaces';
import cafeapi from '../api/apiCafe';

/**Estado de Productos */
type ProductContextProps = {
    products: Producto[];
    /**una funcion que es una promesa y devuleve un void */
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (productId: string) => Promise<void>;
    loadProductById: (productId: string) => Promise<Producto>;
    uploadImage: (data: any, productId: string) => Promise<void>;/**Cambiar el ANY */

}

export const ProductContext = createContext({} as ProductContextProps);

/**Este ees el Provider de Productos */
export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async () => {
        const { data } = await cafeapi.get<ListaProdResponse>('/api/productos?limite=50');
        setProducts([...data.productos]);
        console.log(data.productos);

    };
    /**Devuelve una promise deñ tipo Producto */
    const loadProductById = async (productId: string): Promise<Producto> => {

        const resp = await cafeapi.get<Producto>(`/api/productos/${productId}`);
        return resp.data;
    };
    const addProduct = async (categoryId: string, productName: string) => { };
    const updateProduct = async (categoryId: string, productName: string, productId: string) => { };
    const deleteProduct = async (productId: string) => { };

    const uploadImage = async (data: any, productId: string) => { };/**Cambiar el ANY */

    return (
        <ProductContext.Provider value={{ products, loadProducts, loadProductById, addProduct, deleteProduct, updateProduct, uploadImage }}>
            {children}
        </ProductContext.Provider>
    )
}