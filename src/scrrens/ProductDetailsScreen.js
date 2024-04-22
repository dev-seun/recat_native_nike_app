import { View, Image, StyleSheet, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = () => {
    const { width } = useWindowDimensions();
    const product = useSelector(state => state.products.selectedProduct);

    const addToCart = () => {
        console.log('add to cart');
    }
    
    return (
        <View>
            <ScrollView>
                <View>
                    <FlatList 
                        data={product.images}
                        renderItem={({item}) => <Image source={{ uri: item }} style={[styles.image, {width}]} />} 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled
                        pagingEnabled
                    />

                    <View style={{padding:20, marginBottom: 40}}>
                        <Text style={styles.title}> {product.name}</Text>
                        <Text style={styles.price}> ${product.price}</Text>
                        <Text style={styles.description}> {product.description}</Text>
                    </View>
                
                </View>
            </ScrollView>
            <Pressable style={styles.button} onPress={addToCart}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {aspectRatio: 1},
    title: {fontSize: 34, fontWeight: '500',  marginVertical: 10,},
    price: {fontWeight: '500', fontSize: 16, letterSpacing: 1.5},
    description: {marginVertical: 10, fontSize: 18, lineHeight: 30, fontWeight: '300'},
    button: {position: 'absolute', backgroundColor: 'black', bottom: 10, right: 20, width: '90%', alignSelf: 'center', borderRadius: 50, alignItems: 'center'},
    buttonText: {color: 'white', padding: 20, fontSize: 16, fontWeight: 'bold'},
});

export default ProductDetailsScreen;