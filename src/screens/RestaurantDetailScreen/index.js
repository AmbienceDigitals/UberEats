import { View, FlatList, TouchableOpacity } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons} from '@expo/vector-icons';
import DishItem from '../../components/DishItem';
import Header from './Header';
import styles from './Styles';
import {useRoute, useNavigation}from '@react-navigation/native';


const RestaurantDetailsScreen = () => {
    // using route information
    const route = useRoute();
    const navigation = useNavigation();

    // using id generated from route
    const id = route.params.id;
    // using id returned from routes to load the details of clicked restaurant
    const restaurant = restaurants[id - 1]

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant}/>}
                data={restaurant.dishes}
                renderItem={({item}) => <DishItem dish={item}/>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}/>

            {/* Icon*/}
            
            <Ionicons 
                name = "arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}
                onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default RestaurantDetailsScreen 

