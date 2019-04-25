import React from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>   
        <Text style={styles.start}>Revise!</Text>
        <Text style={styles.slogan}>learn how to learn</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#607d8b'
  },
    start:{
    fontSize:50,
    color:'white',
    alignSelf:'center',
  },
  slogan:{
    fontSize:20,
    color:'white',
    alignSelf:'center',
},
});
