import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import login from './login';
import signup from './signup'
import ScreenNavigator from './ScreenNavigator'


class NavigationDrawerStructure extends React.Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const WelcomeScreen = createSwitchNavigator({
  //All the screen from the Screen1 will be indexed here

  First: {
    screen: ScreenNavigator

  },

  });


const HighScoresScreen = createStackNavigator({
  //All the screen from the Sceen2 will be indexed here
  Second: {
    screen: login,
    navigationOptions:({
      title: 'Results',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SettingScreen = createStackNavigator({
  //All the screen from the Screen3 will be indexed here

  Third: {
    screen: signup,
    navigationOptions:({
      title: 'Timetables',
      headerStyle: {
        backgroundColor: '#607d8b',
      },
      headerTintColor: '#fff',
    }),
  },
});

const AppTabNavigator = createBottomTabNavigator({
  HOME:WelcomeScreen,
  SETTINGS:HighScoresScreen,
  ABOUT:SettingScreen
  },
  {tabBarOptions: {
    initialRouteName: 'WelcomeScreen',
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#3E2723',
    fontSize:'90',
    style: {
      backgroundColor: '#999999',
   },
},
});

export default createAppContainer(AppTabNavigator);