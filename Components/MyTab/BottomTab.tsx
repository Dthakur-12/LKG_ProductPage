import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/AntDesign'
import IconsT from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import MainHome from '../MainHome'
import Profile from './Profile'
import Search from './Search'
import Cart from './Cart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{tabBarStyle:{height:'10%',backgroundColor:'red'}}}
    >
    <Tab.Screen name="MainHome" component={MainHome}
    options={{
      headerShown: false,
      tabBarActiveTintColor: '#ffff',
      tabBarInactiveTintColor: '#ffff',
      title:'',
      tabBarIcon: ({ color }) => {
        return <Icons name='home' size={30} color={color} />
      }}}
    />
     <Tab.Screen name="Search" component={Search}
    options={{
      headerShown: false,
      tabBarActiveTintColor: '#ffff',
      tabBarInactiveTintColor: '#ffff',
      title:'',
      tabBarIcon: ({ color }) => {
        return <Icons name='search1' size={30} color={color} />
      }}}
    />
     <Tab.Screen name="Cart" component={Cart}
    options={{
      headerShown: false,
      tabBarActiveTintColor: '#ffff',
      tabBarInactiveTintColor: '#ffff',
      title:'',
      tabBarIcon: ({ color }) => {
        return <Icons name='shoppingcart' size={30} color={color} />
      }}}
    />
     <Tab.Screen name="Profile" component={Profile}
    options={{
      headerShown: false,
      tabBarActiveTintColor: '#ffff',
      tabBarInactiveTintColor: '#ffff',
      title:'',
      tabBarIcon: ({ color }) => {
        return <IconsT name='person' size={30} color={color} />
      }}}
    />
   
  </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})