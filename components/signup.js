import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subheader}>All settings under incubation</Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
subheader: {
  fontSize: 18,
  fontWeight: 'bold'
},
});