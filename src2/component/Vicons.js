import * as React from 'react';
import { useState } from 'react';
import { View,Text } from 'react-native';
// import { Checkbox, PaperProvider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Vicons = () =>{
    
    return(
<View style={{height:"100%",justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:36,fontWeight:'bold'}}>
    Hi
    </Text>
    <AntDesign name='customerservice' style={{color:'red',fontSize:50}}/>
    <AntDesign name='windows' style={{color:'red',fontSize:50}}/>
   
    </View>
)};

export default Vicons;