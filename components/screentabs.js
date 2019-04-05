
import React from 'react';import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import schedule from './components/schedule';
import syllabus from './components/syllabus';
import reading from './components/reading';
import reference from './components/reference';
import quotes from './components/quotes';
import credits from './components/credits';



const InitialNavigator = createSwitchNavigator({
  schedule: schedule,
  syllabus: syllabus,
  reading:reading
  reference: reference,
  quotes: quotes,
  credits:credits

});

export default createAppContainer(InitialNavigator);