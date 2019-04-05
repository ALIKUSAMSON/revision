
import React from 'react';import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SplashScreen from './components/SplashScreen';
import AppNavigator from './components/AppNavigator';
import schedule from './components/schedule';
import syllabus from './components/syllabus';
import reading from './components/reading';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator,
  schedule:schedule,
  syllabus:syllabus,
  reading:reading
});


export default createAppContainer(InitialNavigator);