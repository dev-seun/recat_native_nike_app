
import { StyleSheet,  Image, FlatList, Pressable } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import { productSlice } from '../store/ProductSlice';

// import { useNavigation } from '@react-navigation/native'

function ProductScreen({navigation}) {
  // const navigation = useNavigation();

  const products = useSelector(state=> state.products.products)
  const dispatch = useDispatch()

  return (
    <FlatList
      data={products} numColumns={2} 
      renderItem={({ item }) =>
        <Pressable style={styles.imageContainer} onPress={() => {
          dispatch(productSlice.actions.setSelectedProduct(item.id))
          navigation.navigate('Product Details')
        }}>
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
