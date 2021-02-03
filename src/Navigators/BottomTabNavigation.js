import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const tabBarOptions = {
  showLabel: true,
  style: {
    backgroundColor: '#222222',
    paddingBottom: 20,
  },
};

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconName = 'heart-o';

    switch (route.name) {
      case 'Search':
        iconName = 'search';
        break;

      case 'Home':
        iconName = 'home';
        break;

      case 'Favorites':
        iconName = 'heart-o';
        break;

      default:
        iconName = 'home';
    }

    return (
      <Icon name={iconName} size={24} color={focused ? '#ffffff' : '#666666'} />
    );
  },
});

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
      initialRouteName="Home">
      <BottomTabs.Screen name="Search" component={SearchScreen} />
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Favorites" component={FavoritesScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
