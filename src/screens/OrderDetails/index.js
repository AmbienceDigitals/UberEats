import React from 'react';
import {View, FlatList} from 'react-native';

import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../Basket/BasketItem';
import Header from './Header';


const order = orders[0];
const restaurant = restaurants[0];


const OrderDetails = () => {
    return (
        <View>
            <FlatList
                data={restaurant.dishes}
                renderItem={({item}) => <BasketItem basketItem={item}/>}
                ListHeaderComponent={Header}
                keyExtractor={(item, index) => index.toString()}
                />
        </View>
    );
}

export default OrderDetails;
