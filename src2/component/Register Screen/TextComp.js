import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {s, vs} from 'react-native-size-matters';

const TextComp = ({text, secureText}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.label}>{text}</Text>
      <TextInput secureTextEntry={secureText} style={styles.textInput} />
    </View>
  );
};
export default TextComp;
const styles = StyleSheet.create({
  wrapper: {
    height: vs(75),
    width: s(375),
  },
  label:{
    width:s(300),
    borderWidth:1,
    borderColor:'black',
    marginLeft:s(38)
  }
});
