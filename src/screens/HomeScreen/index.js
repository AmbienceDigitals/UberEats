import {View, StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
            data={restaurants}
            renderItem={({item}) => <RestaurantItem
            restaurant={item}/> }
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}/>
        </SafeAreaView>
        
    );
} 

const styles = StyleSheet.create({
    padding: 10,
});
