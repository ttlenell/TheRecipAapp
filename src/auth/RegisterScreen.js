import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'native-base';

import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [, setLoading] = useState(false);

  const firebase = useContext(FirebaseContext);
  const [, setUser] = useContext(UserContext);

  const RegisterUser = async () => {
    setLoading(true);

    const user = {username, email, password};

    try {
      const createdUser = await firebase.createUser(user);

      setUser({...createdUser, isLoggedIn: true});
    } catch (error) {
      console.log('Error @signUp: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.registerTextView}>
        <Text style={styles.registerText}>Register</Text>
      </View>

      <View style={styles.forms}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setUsername(text)}
          placeholder={'Full Name'}
          inlineImageLeft={'account'}
          keyboardType="default"
        />

        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setEmail(text)}
          placeholder={'Email'}
          inlineImageLeft={'account'}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setPassword(text)}
          placeholder={'Password'}
          inlineImageLeft={'account'}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
        />

        <Button style={styles.registerUserStyle} onPress={() => RegisterUser()}>
          <Text style={styles.registerUserText}>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginVertical: 110,
  },
  forms: {
    flexDirection: 'column',
    flex: 1,
  },
  textinput: {
    fontSize: 20,
    fontWeight: '300',
    borderColor: '#8490B8',
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  registerText: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '200',
  },

  registerTextView: {
    padding: 10,
    marginLeft: 50,
  },

  registerUserStyle: {
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: '#8490B8',
  },
  registerUserText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
});

export default Register;
