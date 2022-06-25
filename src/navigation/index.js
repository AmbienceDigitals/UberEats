import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailScreen';
import OrderDetails from '../screens/OrderDetails';
import OrderScreen from '../screens/OrdersScreen';

import {Foundation, FontAwesome5, MaterialIcons  } from '@expo/vector-icons'
import DishDetails from '../screens/DishDetails';
import Basket from '../screens/Basket';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name = "Home"
                component={HomeTabs}
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen
                name = "Restaurant"
                component={RestaurantDetailsScreen}
                options={{
                    headerShown: false
                }}/>

            <Stack.Screen
                name = "Dish"
                component={DishDetails}
                options={{
                    headerShown: false
                }}/>

            <Stack.Screen
                name = "Basket"
                component={Basket}
                options={{
                    headerShown: false
                }}/>
            
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: 'white'
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                    <Foundation name="home" size={24} color={color}/>
                    )
                }}/>
            <Tab.Screen
                name="Orders"
                component={OrderStackNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="list-alt" size={24} color={color} />
                    )
                }}/>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="user-alt" size={24} color={color}/>
                    )
                }}/>
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();


const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Restaurant"
                component={HomeScreen}/>
            <HomeStack.Screen
                name="Restaurant"
                component={RestaurantDetailsScreen}/>
            <HomeStack.Screen
                name="Dish"
                component={DishDetails}/>
        </HomeStack.Navigator>
    )
}

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{
                    headerShown: false
                }}/>
            <OrderStack.Screen
                name="Order"
                component={OrderDetails}
                options={{
                    headerShown: false
                }}/>
        </OrderStack.Navigator>
    )
}

export default RootNavigator