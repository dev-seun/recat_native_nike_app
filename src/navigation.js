
import {NavigationContainer} from '@react-navigation/native'
import ProductScreen from './scrrens/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductDetailsScreen from './scrrens/ProductDetailsScreen';
import ShoppingCart from './scrrens/ShoppingCart';

import {FontAwesome5} from "@expo/vector-icons"
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
                <Stack.Screen name='Products' component={ProductScreen} options={({navigation}) => (
                    {
                        headerRight: () => (
                            <Pressable style={{flexDirection: 'row'}} onPress={()=> navigation.navigate("Cart")}>
                                <FontAwesome5 name='shopping-cart' size={18} color={'grey'} />
                                <Text style={{marginLeft: 5, fontWeight: '500', }}>1</Text>
                            </Pressable>
                        )})
                    } />
                <Stack.Screen name='Product Details' component={ProductDetailsScreen} options={{presentation: 'modal'}} />
                <Stack.Screen name='Cart' component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
