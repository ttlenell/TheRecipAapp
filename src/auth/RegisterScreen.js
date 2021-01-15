import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Icon} from 'native-base';
// import auth from '@react-native-firebase/auth';
// import {firebase} from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';

// eslint-disable-next-line no-undef
export default Register = () => {
  // firebase.initializeApp();

  // const firestore_ref = firestore().collection('users');

  // const [fullName, setFullName] = useState('');
  // const [displayName, setDisplayName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // async function RegisterUser() {
  //   await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email.trim(), password)
  //     .then((loggeduser) => {
  //       const userdata = firestore_ref.doc(loggeduser.user.uid);
  //       userdata
  //         .set({
  //           name: fullName,
  //           email: email,
  //           displayName: displayName,
  //         })
  //         .then(() => {
  //           alert('sucesss');
  //         });
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState();
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);
  const [displayName, setDisplayName] = useState();

  const RegisterUser = async () => {
    setLoading(true);

    const user = {username, email, password, profilePhoto};

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
      <View style={{padding: 10, marginLeft: 50}}>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            fontWeight: '200',
          }}>
          Register{' '}
        </Text>
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
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setPassword(text)}
          placeholder={'Password'}
          inlineImageLeft={'account'}
          keyboardType="default"
          autoCapitalize="none"
        />

        {/* <TextInput
          style={styles.textinput}
          onChangeText={(text) => setDisplayName(text)}
          placeholder={'Display name'}
          inlineImageLeft={'account'}
          keyboardType="default"
        /> */}

        <Button
          style={{
            borderRadius: 20,
            padding: 10,
            marginTop: 30,
            justifyContent: 'center',
            backgroundColor: 'green',
          }}
          onPress={() => RegisterUser()}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
            }}>
            Sign Up
          </Text>
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
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
});
