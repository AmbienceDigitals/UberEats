import {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {AntDesign} from '@expo/vector-icons'
import {useRoute, useNavigation} from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";


const DishDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();
    
    // dish returned from route params 
    const dish = route.params.dish;
    
    const [quantity, setQuantity] = useState(1);

    // function to decrease quantity
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    // function to decrease quantity
    const decreaseQuantity = () => {
        if (quantity === 1) return 
        setQuantity(quantity - 1)
    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2)
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text>{dish.description}</Text>
            <View style={styles.separator}/>

            <View style={styles.row}>
                <TouchableOpacity
                onPress={() => decreaseQuantity()}>
                    <AntDesign
                    name="minuscircleo"
                    size={60}
                    color="black"/>
                </TouchableOpacity>

                <Text style={styles.quantity}> {quantity} </Text>

                <TouchableOpacity
                onPress={() => increaseQuantity()}>
                    <AntDesign
                    name="pluscircleo"
                    size={60}
                    color="black"/>
                </TouchableOpacity>
                
            </View>

            <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to basket       {getTotal()}$</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        padding: 10
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10
    },
    description: {
        color:'grey'
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center'

    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    }
})

export default DishDetails;
