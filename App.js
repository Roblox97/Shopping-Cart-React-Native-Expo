import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/routes';
import CartProvider from './src/context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <CartProvider>
          <StatusBar backgroundColor='#fff' />
          <Routes />
        </CartProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}