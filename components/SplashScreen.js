import React from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        100
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
        <Image style = {styles.image}
          source={require('./images/transformers.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    image:{
    width:250,
    height:200,
    alignSelf:'center',
    marginTop: 50,
  },
}
);
