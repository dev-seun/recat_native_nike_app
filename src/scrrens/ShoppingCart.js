
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import cart from '../data/cart.js'
import CartListItem from '../component/CartListItem';


const ShoppingCartTotals = () => (
    <View style={styles.totalContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410.00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>10.00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>420.00 US$</Text>
        </View>
    </View>
);

const ShoppingCart = () => {
    const addToCart = () => {}

    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable style={styles.button} onPress={addToCart}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        paddingTop: 20,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'gray',
        fontSize: 16
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
    },
    button: { position: 'absolute', backgroundColor: 'black', bottom: 10, right: 20, width: '90%', alignSelf: 'center', borderRadius: 50, alignItems: 'center' },
    buttonText: { color: 'white', padding: 20, fontSize: 16, fontWeight: 'bold' },
})

export default ShoppingCart;
