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

export default class welcome extends React.Component{
  constructor(props) {
    super(props); 
}

  render(){
    return(
      <View style={styles.container}>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('schedule')}>
        <Text style={styles.text} >My schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('syllabus')}>
        <Text style={styles.text}>Syllabus Tracker</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('reading')}>
        <Text style={styles.text}>Reading Tips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('reference')}>
        <Text style={styles.text}>Reference & Consultation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('quotes')}>
        <Text style={styles.text}>Motivational Quotes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={()=>this.props.navigation.navigate('credits')}>
        <Text style={styles.text}>Credits</Text>
      </TouchableOpacity>

      </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    backgroundColor:'#0097a7',
    height:150,
    margin:2,
    marginVertical:15,
    marginHorizontal:5,
    paddingHorizontal:5,
    alignSelf: 'stretch',
    width:width/2-10
  },
  text:{
    color:'white',
    fontSize:30
  }

});