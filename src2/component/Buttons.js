import {View, Text, Pressable, StyleSheet} from 'react-native';
import React,{useState} from 'react';
import StackNav from '../Navigation/StackNav';
import {scale} from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';

const FaceBook = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#3b5998',
        height: 45,
        width: 145,
        borderRadius: 6,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          paddingTop: 13,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};
const GooglePlus = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#FF6347',
        height: 45,
        width: 145,
        borderRadius: 6,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          paddingTop: 13,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};
const SignIn = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#00FF7F',
        height: 50,
        width: 315,
        borderRadius: 6,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          paddingTop: 15,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

const SignUp = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#00FF7F',
        height: 50,
        width: 105,
        borderRadius: 6,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          paddingTop: 13,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};
  const SelectSubs = ({text, onPress, buttonStyle, textStyle}) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          {
            backgroundColor: '#00FF7F',
            height: scale(50),
            width: scale(315),
            borderRadius: scale(6),
          },
          buttonStyle,
        ]}>
        <Text
          style={[
            {
              color: 'white',
              fontSize: scale(18),
              textAlign: 'center',
              paddingTop: scale(15),
            },
            textStyle,
          ]}>
          {text}
        </Text>
      </Pressable>
    );
  };
const CheckBoxes = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.checkBox} >
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onCheckColor="white"
        onFillColor="#17C884"
        onTintColor="#17C884"
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
};
// const Card=()=>{
//     return(

//     )
// }


const styles= StyleSheet.create({
  checkBox:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  }
})

export {CheckBoxes,FaceBook, GooglePlus, SignIn, SignUp, SelectSubs};
