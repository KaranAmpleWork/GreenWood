import React from "react";
import { View,Image, StyleSheet, TextComponent } from "react-native";
import { s,vs,ms } from "react-native-size-matters";
import TextComp from "../component/Register Screen/TextComp";

const Register=()=>{
  return(
    <View style={styles.wrapper} >
      <Image source={require('../images/GreenWoodLogo.png')} resizeMode="contain" style={styles.appLogo } />
      <TextComp text="E_MAIL ADDRESS"/>
    </View>
  )
}
export default Register;

const styles =StyleSheet.create({
  appLogo:{
    height:vs(253),
    marginTop:vs(100),
    width:'100%',
    backgroundColor:'red',
  justifyContent:'center',
    alignItems:'center'
  },
  wrapper:{
    height:vs(812),
    width:s(375),
  }
})