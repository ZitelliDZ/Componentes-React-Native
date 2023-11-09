import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputsScreen from '../screens/InputsScreen';
import PulltoRefresh from '../screens/PulltoRefresh';
import SectionnList from '../screens/SectionnList';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScroll from '../screens/InfiniteScroll';
import SlideScreen from '../screens/SlideScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <View style={{backgroundColor: '#5658D6', flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
               backgroundColor: 'white'
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen}
          />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="InputsScreen" component={InputsScreen} />
          <Stack.Screen name="PulltoRefresh" component={PulltoRefresh} />
          <Stack.Screen name="SectionnList" component={SectionnList} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScroll" component={InfiniteScroll} />
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
