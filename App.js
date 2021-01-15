import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UserProvider} from './src/context/UserContext';
import {FirebaseProvider} from './src/context/FirebaseContext';

import AppStackScreens from './src/stacks/AppStackScreens';

// eslint-disable-next-line no-undef
export default App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
};
