
import { StyleSheet,  Image, FlatList, Pressable } from 'react-native';
import products from '../data/products.js'
// import { useNavigation } from '@react-navigation/native'

function ProductScreen({navigation}) {
  // const navigation = useNavigation();
  return (
    <FlatList
      data={products} numColumns={2} 
      renderItem={({ item }) =>
        <Pressable style={styles.imageContainer} onPress={() => navigation.navigate('Product Details')}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>}
    />
  )
}

const styles = StyleSheet.create({
    image: { width: "100%", aspectRatio: 1 },
    imageContainer: { width: "50%", padding: 1 },
});


export default ProductScreen
