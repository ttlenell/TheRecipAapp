import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';

// eslint-disable-next-line no-undef
export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: '#222222',
      paddingBottom: 12,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName = 'heart-o';

      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;

        case 'Favorites':
          iconName = 'heart-o';
          break;

        case 'Search':
          iconName = 'search';
          break;

        // case 'Profile':
        //   iconName = 'ios-person';
        //   break;

        default:
          iconName = 'home';
      }

      return (
        <Icon
          name={iconName}
          size={24}
          color={focused ? '#ffffff' : '#666666'}
        />
      );
    },
  });

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Favorites" component={FavoritesScreen} />
      <MainStack.Screen name="Search" component={SearchScreen} />
    </MainStack.Navigator>
  );
};
