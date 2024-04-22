import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductScreen from './src/scrrens/ProductScreen.js';
import ProductDetailsScreen from './src/scrrens/ProductDetailsScreen.js';
import ShoppingCart from './src/scrrens/ShoppingCart.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen  /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
