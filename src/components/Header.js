import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
  function DrawerScreen() {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.headerMenu}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={30} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a header</Text>
      <DrawerScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 0,
    backgroundColor: 'blue',
    bottom: 0,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    left: 50,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerMenu: {
    margin: 10,
    marginTop: 50,
    left: 120,
    width: 70,
    height: 70,
    // borderColor: 'black',
    // borderWidth: 10,
  },
});
