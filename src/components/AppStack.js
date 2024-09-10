import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import AppDrawer from './AppDrawer';

//Screens
import UserListScreen from '../screens/UserListScreen';
import LandingScreen from '../screens/LandingScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Ionicons from '@expo/vector-icons';

import BottomTab from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <AppDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          // fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Profile') {
          } else if (route.name === 'Users') {
            iconName = 'person-sharp';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="home" />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="person-circle" />,
        }}
      />
      <Drawer.Screen
        name="Users"
        component={UserListScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="settings-outline" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
