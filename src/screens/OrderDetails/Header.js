import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';

import {useRoute} from '@react-navigation/native'



const Header = () => {
    const route = useRoute();

    const order = route.params.order;
    
    return (
        <View>
            <View style={styles.page}>
                <Image
                    source={{uri: order.Restaurant.image}}
                    style={styles.image}/>

                {/* Title view */}
                <View style={styles.container}>
                    <Text style={styles.title}>{order.Restaurant.name}</Text>
                    <Text style={styles.subtitle}> {order.status} &#8226; 2 days ago</Text>

                    <Text style={styles.menuTitle}>Your orders</Text>
                </View>
            </View>
        </View>
    );
}


export default Header;
