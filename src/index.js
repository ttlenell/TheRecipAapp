// import React, {Component} from 'react';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// import LoginScreen from './auth/LoginScreen';
// import RegisterScreen from './auth/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';

// const AppStack = createStackNavigator({
//   Home: HomeScreen,
//   Register: RegisterScreen,
//   Login: LoginScreen,
// });

// const AuthNavigator = createStackNavigator({
//   LoginRoute: {
//     screen: LoginScreen,
//     navigationOptions: () => ({
//       headerShown: false,
//     }),
//   },
// });

// const AppContainer = createAppContainer(
//   createSwitchNavigator(
//     {
//       App: AppStack,
//       Auth: AuthNavigator,
//     },
//     {
//       initialRouteName: 'Auth',
//     },
//   ),
// );

// export default class App extends Component {
//   render() {
//     return <AppContainer screenProps={{appName: 'TheRecipeApp'}} />;
//   }
// }
