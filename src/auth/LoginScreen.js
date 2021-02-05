import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
} from 'react-native';
import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';
import LoginHeader from '../components/LoginHeader';

// eslint-disable-next-line no-undef
export default Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [, setUser] = useContext(UserContext);

  const signIn = async () => {
    setLoading(true);

    try {
      await firebase.signIn(email, password);

      const uid = firebase.getCurrentUser().uid;

      const userInfo = await firebase.getUserInfo(uid);

      setUser({
        username: userInfo.username,
        email: userInfo.email,
        uid,
        // profilePhotoUrl: userInfo.profilePhotoUrl,
        isLoggedIn: true,
      });
    } catch (error) {
      console.log('error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.flex1}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.container}>
          <View style={styles.inner}>
            <LoginHeader />

            <View style={styles.form}>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Email-address</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Email'}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Password'}
                  // inlineImageLeft={'account'}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => signIn()}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText1}>
                Don't have an account?
                <Text style={styles.registerText2}> Register here</Text>
              </Text>
            </TouchableOpacity>
            <View style={styles.flex1} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
  },
  flex1: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
  },
  signInButton: {
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#8490B8',
  },
  signInText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  registerButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
  registerText2: {
    fontWeight: '500',
    color: '#E9446A',
  },
  registerText1: {
    color: 'black',
    fontSize: 13,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    // color: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  inputView: {
    marginTop: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    fontSize: 18,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#8490B8',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
