//Modules
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
// import { setNavigator } from './src/navigationRef';

//Drawer Navigation
import BottomTab from './src/components/TabNavigator';
import AppDrawer from './src/components/AppDrawer';
// import AppStack from './src/components/AppStack';

//Screens
import UserListScreen from './src/screens/UserListScreen';
import LandingScreen from './src/screens/LandingScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <AppDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#EC785B',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          // fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        drawerBarIcon: ({ focused, color, size }) => {
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
        name="Home "
        component={BottomTab}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="home" />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="person-outline" />,
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

function Root() {
  return (
    <Drawer.Navigator

    // screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={AppStack} />
      <Drawer.Screen name="Users" component={UserListScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Bot" component={Bot} /> */}
        <Stack.Screen name="Root" component={AppStack} />
        {/* <Stack.Screen name="Bot" component={Root} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
