
import React from 'react';import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SplashScreen from './components/SplashScreen';
import AppNavigator from './components/AppNavigator';
import ScreenNavigator from './components/ScreenNavigator';
import savenavigation from './components/savenavigation';




const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
 App: AppNavigator,
  



});


export default createAppContainer(InitialNavigator);