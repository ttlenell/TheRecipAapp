import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Icon} from 'native-base';

import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

//...
export default function Welcome({navigation}) {
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
      <Text style={styles.header1}>header 1</Text>
      <Text style={styles.header2}>header 2</Text>

      <View style={styles.buttonPlaceholder}>
        <Button
          onPress={() => navigation.navigate('Login')}
          style={styles.login}>
          <Text style={styles.textstyle}>Login</Text>
        </Button>

        <Button
          onPress={() => navigation.navigate('Register')}
          style={styles.login}>
          <Text style={styles.textstyle}>Register</Text>
        </Button>
        <Button style={styles.login} onPress={() => logOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 70,
    alignSelf: 'center',
    marginVertical: 150,
  },
  header1: {
    marginTop: '15%',
    fontSize: 60,
    color: 'grey',
  },
  header2: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 20,
    color: 'green',
  },
  buttonPlaceholder: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 50,
  },
  login: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  textstyle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
