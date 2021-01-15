import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';

// eslint-disable-next-line no-undef
export default AuthStackScreens = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
