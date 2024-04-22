
import { StyleSheet, View, Image, FlatList } from 'react-native';
import products from '../data/products.js'

function ProductScreen(props) {
  return (
    <FlatList data={products} numColumns={2} renderItem={({ item }) =>
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </View>}
    />
  )
}

const styles = StyleSheet.create({
    image: { width: "100%", aspectRatio: 1 },
    imageContainer: { width: "50%", padding: 1 },
});


export default ProductScreen
