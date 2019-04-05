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

export default class syllabus extends React.Component{
    static navigationOptions = {
    title: 'schedule to the app!',
  };

  render(){
    return(
      <View style={styles.Maincontainer}>
         <Text style={{ fontSize: 23 }}>My schedule</Text>

      </View>
      );
  }

}

const styles = StyleSheet.create({
  Maincontainer:{
    flexDirection:'row',
    flexWrap:'wrap'

  },
  text:{
    color:'white',
    fontSize:20
  }

});