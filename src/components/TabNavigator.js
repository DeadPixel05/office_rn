import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

//Screens
import UserListScreen from '../screens/UserListScreen';
import LandingScreen from '../screens/LandingScreen';
import SettingScreen from '../screens/SigninScreen';
import ArScreen from '../screens/ArScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Main') {
          } else if (route.name === 'Settings') {
            iconName = 'settings-sharp';
          } else if (route.name == 'AR') {
            iconName = 'aperture-sharp';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Main" component={LandingScreen} />
      <Tab.Screen name="AR" component={ArScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;
