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

export default class credits extends React.Component{
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
      <Text style={styles.header}>Credits</Text>
      <Text style={styles.subheader}>Release 1.0</Text>
      <Text style={styles.subheader}>Program Editor used: Visual code</Text>
      <Text style={styles.subheader}>Made with JavaScript using React Native framework:</Text>
      <Text style={styles.subheader}>Programmers:Alemi Herbert & Walugembe Jonathan</Text>
      <Text style={styles.subheader}>Supervisor: Aliku Samson.</Text>
      <Text style={styles.subheader}>Supervisor: BUSINGYE JACKSON.</Text>
      <Text style={styles.subheader}>Supervisor: KIGOZI DAVID.</Text>
      <Text style={styles.subheader}>Light Academy Computer club</Text>
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