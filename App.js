// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// import './gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { setNavigator } from './src/navigationRef';

import UserListScreen from './src/screens/UserListScreen';
import LandingScreen from './src/screens/LandingScreen';

// const mainListFlow = createStackNavigator({
//   UserList: UserListScreen,
// });

// mainListFlow.navigationOptions = ({ navigation }) => {
//   title = 'Main';
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//     title,
//   };
// };

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Test2() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen name="User List" component={UserListScreen} />
    </Tab.Navigator>
  );
}

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home2" component={Test2} />
      <Drawer.Screen name="User List" component={UserListScreen} />
    </Drawer.Navigator>
  );
}

function Bot() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen name="User List" component={UserListScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  // return (
  //   <NavigationContainer>
  //     {/* <Tab.Navigator>
  //       <Tab.Screen name="Home" component={HomeScreen} />
  //     </Tab.Navigator> */}
  //     <Drawer.Navigator initialRouteName="Home">
  //       <Drawer.Screen name="Home" component={UserListScreen} />
  //       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  //     </Drawer.Navigator>
  //     {/* <Tab.Navigator /> */}
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Bot" component={Bot} /> */}
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
