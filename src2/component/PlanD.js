
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { scale } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import { CheckBoxes } from './Buttons';


const PlanD = ({text,textA,textB,icon,marStl}) => {
  
  return (
    <View style={[styles.box,marStl]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.tData}>
        <Text  style={styles.textA}>
        {textA}
        </Text>
        <Text  style={styles.textB}>{textB}</Text>
      </View>
      <CheckBoxes/>
  
     
    </View>
  );
};
export default PlanD;
const styles = StyleSheet.create({
  box: {
    borderColor: '#17C884',
    height: scale(73),
    width: scale(315),
    backgroundColor: 'white',
    margin: (38, 18, 0, 15),
    borderColor: '#17C884',
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius:scale(7)
  },
  text:{
    fontSize:scale(32),fontWeight:"bold",
    margin:(12,0,15,18),
    color:"#17C884",
    textAlign:'center'
    // color:{checked==true? "#17C884":"black"}
  },
  textA:{
    fontSize:scale(25),
    color:"#181818",
    marginTop:scale(10)

  },textB:{
    fontSize:scale(11),
    color:'#6D6D6D'
  },
});
