import React, {Component} from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Picker,
  CheckBox
} from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
}


export default class syllabus extends React.Component{
    static navigationOptions = {
    title: 'Syllabus Tracker',
    headerStyle: {
      backgroundColor: '#FF9800',
    },
    headerTintColor: '#fff',
  };
  constructor(){
    super();
    this.state = {
      checked: false
    };
  }
    checkBox_Test = (id) => {
      this.setState((prevState) => ({ check: !prevState.check }));
    }

  render(){
   
    return(
      <View style={styles.container}>
    <Text style={styles.header}>Course outline</Text>

  <View style={{ flexDirection: 'column'}}>

  <View style={{ flexDirection: 'row' }}>
    <CheckBox
       value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> select all</Text>
 
  </View>

<View style={{ flexDirection: 'row' }}>
  <CheckBox
     value = { this.state.check }
      onChange = { this.checkBox_Test }
  />
  <Text style={styles.subheader}> Mechanics and Properties of Matter.</Text>
</View>
</View>

  <View style={{ flexDirection: 'column'}}>
  <View style={{ flexDirection: 'row' }}>
    <CheckBox
       value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> Heat.</Text>
  </View>
  </View>

  <View style={{ flexDirection: 'column'}}>
  <View style={{ flexDirection: 'row' }}>
    <CheckBox
       value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> Geometrical optics.</Text>
  </View>
  </View>

  <View style={{ flexDirection: 'column'}}>
  <View style={{ flexDirection: 'row' }}>
    <CheckBox
      value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> Waves, wave optics and sound.</Text>
  </View>
  </View>

  <View style={{ flexDirection: 'column'}}>
  <View style={{ flexDirection: 'row' }}>
    <CheckBox
      value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> Electricity and Capacitors.</Text>
  </View>
  </View>

  <View style={{ flexDirection: 'column'}}>
  <View style={{ flexDirection: 'row' }}>
    <CheckBox
       value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> Magnetism.</Text>
  </View>
  </View>

  <View style={{ flexDirection: 'column'}}>
  <View style={{ flexDirection: 'row' }}>
    <CheckBox
      value = { this.state.check }
        onChange = { this.checkBox_Test }
    />
    <Text style={styles.subheader}> Modern physics </Text>
  </View>
  </View>
  </View>

      
      );
  }

}



const styles = StyleSheet.create({

container: {
  paddingHorizontal: padding.sm,
  paddingVertical: padding.lg,
  width: dimensions.fullWidth
},
subheader: {
  backgroundColor: 'transparent',
  fontSize: fonts.md,
  fontFamily: fonts.primary,
  fontWeight: 'bold'
},
header: {
  backgroundColor: 'transparent',
  fontSize: fonts.lg,
  fontFamily: fonts.primary,
  fontWeight: 'bold'
},
section: {
  paddingVertical: padding.lg,
  paddingHorizontal: padding.xl,
  fontSize: fonts.md,
},
});