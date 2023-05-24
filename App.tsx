import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image,SafeAreaView, ViewComponent,FlatList,ScrollView} from 'react-native';
import React from 'react';
import MainHome from './Components/MainHome';
import Homewish from './Components/Homewish';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/MyTab/Home';
import BottomTab from './Components/MyTab/BottomTab';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={BottomTab} options={{headerShown:false}} />
    <Stack.Screen name="Notifications" component={Homewish} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;


