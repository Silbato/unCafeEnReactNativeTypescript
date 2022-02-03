
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Navigator } from './navigation/navigator';
import { AuthProvider } from './src/context/AuthContext';
import { ProductProvider } from './src/context/ProductContext';

const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </AuthProvider>
  );
}
const App = () => {

  return (
    <NavigationContainer>

      {/**le pasamos las propiedades de useContext que definimos */}
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
