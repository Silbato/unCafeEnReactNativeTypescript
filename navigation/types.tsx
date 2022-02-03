export type StackNavigatorProductsScreenParams = {
    ProductsScreen: undefined,
    ProductScreen: { id?: string, name?: string },
    NewProduct: undefined
}

export type ProductoParams = {
    id?: string; name?: string;
}
export interface RootStackParamsList extends StackNavigatorProductsScreenParams { };

declare global {
    namespace ReactNavigation {
        interface RootParamsList extends RootStackParamsList { }
    }
}