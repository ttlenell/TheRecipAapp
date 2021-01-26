import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

export default function DrawerContent(props) {
  //...

  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({...state, isLoggedIn: false}));
    }
  };
  return (
    <View style={styles.container}>
      <Text>This is a drawer</Text>
      <Button title="Log out" style={styles.login} onPress={() => logOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
