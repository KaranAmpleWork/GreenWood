import React from 'react';
import {View, Text, Image, Alert, StatusBar, StyleSheet} from 'react-native';
import {FaceBook, GooglePlus, SignIn} from '../component/Buttons';

const Landing = ({navigation}) => {
  // const navigation = useNavigation();

  const handleClick = () => {
    console.log('clicked fb');
    navigation.navigate('Register');
  };
  const goBack = () => {
    navigation.navigate('Email');
  };

  return (
    <View
      style={styles.mainWrapper}>
      <StatusBar hidden={true} />
      <View>
        <Image
          source={require('../images/group.png')}
          style={styles.iamgeLogo}
        />
      </View>
      
        <SignIn text="Sign in with E-mail" style={styles.SignBtn}/>
      
      <View style={{flexDirection: 'row', columnGap: 2}}>
        <FaceBook text="Facebook" onPress={handleClick} />
        <GooglePlus
          text="Google"
          onPress={() => navigation.navigate('SubScriptionsDetails')}
        />
      </View>
      <View style={{flexDirection: 'row', paddingTop: 35}}>
        <Text>{'Dont have an Account?'}</Text>
        <Text style={{color: '#00FF7F', fontWeight: 'bold'}} onPress={goBack}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};
export default Landing;
const styles = StyleSheet.create({
    mainWrapper:{
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 10,
      backgroundColor: 'white',
    },
    iamgeLogo:{
      width: 300,
       height: 350
      },
    SignBtn:{marginBottom: 10}
})
//Use flex :1 in view in App component to Show the output
