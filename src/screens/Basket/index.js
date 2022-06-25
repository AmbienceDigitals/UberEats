import {useState} from 'react'
import {View, Text, FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import styles from './styles';
import BasketItem from './BasketItem';

const restaurant = restaurants[0];

const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            
            <Text
                style={{fontWeight: 'bold', marginTop: 20, fontSize: 18}}> Your Items </Text>

            <FlatList
                data = {restaurant.dishes}
                renderItem={({item}) => <BasketItem basketItem={item}/>}
                keyExtractor={(item, index) => index.toString()}/>

            <View style={styles.separator}/>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>
            </View>
        </View>
    );
}

export default Basket;
