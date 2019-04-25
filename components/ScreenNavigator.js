import React from 'react';
//This is an example code for NavigationDrawer//

import { View, Image, TouchableOpacity } from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import welcome from './welcome'
import schedule from './schedule';
import syllabus from './syllabus';
import reading from './reading';
import reference from './reference';
import quotes from './quotes';
import credits from './credits';


const WelcomeActivity_StackNavigator = createStackNavigator({
  //All the screens will be indexed here
  welcome:{screen:welcome,
    navigationOptions:({
      title: 'Revise!',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
  schedule: {screen: schedule,
    navigationOptions:({
      title: 'My Schedule',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
  syllabus: {screen: syllabus,
    navigationOptions:({
      title: 'Syllabus Tracker',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
  reading: {screen: reading,
    navigationOptions:({
      title: 'Reading Tips',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
  reference: {screen: reference,
    navigationOptions:({
      title: 'References',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
  quotes: {screen: quotes,
    navigationOptions:({
      title: 'Motivational Quotes',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
  credits: {screen: credits,
    navigationOptions:({
      title: 'Credits',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
    });


export default createAppContainer(WelcomeActivity_StackNavigator);