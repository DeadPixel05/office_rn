import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import * as Font from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AppDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#EC785B' }}
      >
        <ImageBackground
          source={require('../assets/images/menu-bg.jpg')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../assets/images/user-profile.jpg')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}
          >
            Cedric Jairus Castañeda
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}
            >
              Computer Operator IV
            </Text>
            {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <DrawerItem
          label="Bug?"
          onPress={() => alert('Report to Administrators')}
        />
        {/* <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.lower_font}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppDrawer;

// const AppDrawer = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Help" onPress={() => alert('Link to help')} />
//     </DrawerContentScrollView>
//   );
// };

// export default AppDrawer;

const styles = StyleSheet.create({
  lower_font: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
});
