import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const OrderListItem = ({order}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate("Order", {order: order})} style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <Image
                source={{uri: order.Restaurant.image}}
                style={{width: "20%", height: '100%', marginRight: 10,}}/>
            
            <View>
                <Text
                style={{fontSize: 16, fontWeight: '600'}}>{order.Restaurant.name}</Text>
                <Text style={{marginVertical: 5}}>3 items &#8226; $38.45</Text>
                <Text>2 days ago &#8226;{order.status}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default OrderListItem;
