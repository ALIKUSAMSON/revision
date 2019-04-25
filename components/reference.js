import React, {Component} from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions
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

export default class reference extends React.Component{
  static navigationOptions = {
    title: 'References ',
    headerStyle: {
      backgroundColor: '#FF9800',
    },
    headerTintColor: '#fff',
  };

  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.header}>References</Text>
      <Text style={styles.subheader}>Advanced level physics- Nelkon and parker</Text>
      <Text style={styles.subheader}>Advanced physics- Tom Duncan</Text>
      <Text style={styles.subheader}>Complete Certificate physics – Arthur Artkinson</Text>
      <Text style={styles.subheader}>Macmillan Secondary physics</Text>
      <Text style={styles.subheader}>Self study material – Kyanda James</Text>
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