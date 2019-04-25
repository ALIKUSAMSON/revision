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

export default class quotes extends React.Component{
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
      <Text style={styles.header}>Quotes of the day</Text>
      <Text style={styles.subheader}>“Failures are expected by losers, ignored by winners.”</Text>
      <Text style={styles.subheader}>“Education is what remains after one has forgotten.”</Text>
      <Text style={styles.subheader}>“No pain no gain.” </Text>
      <Text style={styles.subheader}>“Education is the most powerful weapon.”</Text>
      <Text style={styles.subheader}>“After climbing a great hill one can only find that there are many more to climb.” </Text>
      <Text style={styles.subheader}>“We learn wisdom from failure much more than success.”</Text>
      <Text style={styles.subheader}>“We often discover what we will do by finding out what we will not do.”</Text>
      <Text style={styles.subheader}>“Do not pray for easy lives. Pray to be stronger men. ”</Text>
      <Text style={styles.subheader}>“Speed reading doesn`t work for studying if you are a slow reader.”</Text>
      <Text style={styles.subheader}>“ Do not try to read in you sleep. You only learn in proportion to how awake you are.</Text>
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