import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const DishItem = ({dish}) => {
    const navigation = useNavigation();

    return (
        // sending dish details as route params value
        <Pressable onPress={() => navigation.navigate("Dish", {dish: dish})} style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text 
                style={styles.description}
                // number of lines is used to shorten text
                numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>${dish.price}</Text>
            </View>
            
            {dish.image && (<Image
                source = {{uri: dish.image}}
                style={styles.image}/>)}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    name: {
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 0.5
    },
    description: {
        color: 'grey',
        marginVertical: 5
    },
    price: {
        fontSize: 17,
    },
    image: {
        width: '30%'
    }
})

export default DishItem;
