import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { withNavigation } from 'react-navigation';

const Navlink = ({ navigation, text, routename }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routename)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default withNavigation(Navlink);
