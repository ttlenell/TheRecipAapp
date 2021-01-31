import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/login_image.jpg')}
      />
      <Text style={styles.greeting}>The recipe app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginBottom: 150,
  },

  image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 400 / 2,
  },
  greeting: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
  },
});
