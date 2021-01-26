import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';

import Header from '../components/Header';

//...
export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text>HOMESCREEN</Text>
        <FlatList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    // marginHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'black',
  },

  textstyle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
