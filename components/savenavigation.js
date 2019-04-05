import React from 'react';import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import welcome from './welcome';
import login from './login';
import signup from './signup';


const HomeNavigator = createSwitchNavigator({
  Welcome: welcome,
  Practice: login,
  Results: signup,
});

const HighScoresScreen = createSwitchNavigator({
  Welcome: login,
  Practice: welcome,
  Results: signup
});

const SettingsScreen = createSwitchNavigator({
  Welcome: signup,
  Practice: login,
  Results: welcome
});



//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: welcome,
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor:'blue',
      }},
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },


  Screen2: {
    //Title
    screen: signup,
    navigationOptions: {
      drawerLabel: 'Demo Screen 2',
    },
  },

  Screen3: {
    //Title
    screen: signup,
    navigationOptions: {
      drawerLabel: 'Demo Screen 3',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);


