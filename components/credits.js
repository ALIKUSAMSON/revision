import React, {Component} from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from "react-native";

var width = Dimensions.get('window').width

export default class credits extends React.Component{

  render(){
    return(
      <View style={styles.Maincontainer}>
         <Text style={{ fontSize: 23 }}>Credits</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  }
});