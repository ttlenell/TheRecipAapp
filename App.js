import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UserProvider} from './src/context/UserContext';
import {FirebaseProvider} from './src/context/FirebaseContext';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import AppStackScreens from './src/stacks/AppStackScreens';

// eslint-disable-next-line no-undef
export default App = () => {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <UserProvider>
          <NavigationContainer>
            <AppStackScreens />
          </NavigationContainer>
        </UserProvider>
      </FirebaseProvider>
    </Provider>
  );
};
