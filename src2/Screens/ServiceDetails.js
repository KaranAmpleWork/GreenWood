import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import { SelectSubs} from '../component/Buttons';
import PlanD from '../component/PlanD';
import Card from '../component/Card';
const ServiceDetails = () => {
  return (
    <View>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../images/YogaComp.jpeg')}
        style={styles.img}
      />
      <SelectSubs text={'Select Subscription'} buttonStyle={styles.btn} marStl={styles.gap}></SelectSubs>
      <PlanD text="45$" textA={"1 year"} textB={"Yoga, Cardio, Muscle Gain"}/>
      <PlanD text="99$" textA={"2 year"} textB={"Yoga, Cardio, Muscle Gain"} marStl={styles.marTops} />
      <PlanD text="129$" textA={"3 year"} textB={"Yoga, Cardio, Muscle Gain"} marStl={styles.marTops}/>
      <SelectSubs text={"Buy Now"} buttonStyle={styles.footer} textStyle={styles.footerText}/>
      {/* <CheckBoxes/> */}
     
    </View>
  );
};
export default ServiceDetails;
const styles = StyleSheet.create({
  img: {
    height: scale(200),
    width: scale(385),
  },
  btn: {
    backgroundColor: '#2A2A2A',
    width: scale(385),
    borderRadius: 0,
  },
  box: {
    width: 345,
    height: 73,
    backgroundColor: 'white',
    margin: (38, 15, 0, 15),
    borderColor: '#17C884',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  marTops:{
    marginTop:-10
  },
  footer:{
    width:scale(375),
    height:scale(64),
    marginTop:scale(60)
  },
  footerText:{
    fontSize:scale(19),
    textAlign:'center'
  },
  gap:{
    marginTop:scale(40)
  }
});

// const PlanDetails=()=>{
//   return(
//     <View style={styles.box} >
//       <Text></Text>
//     </View>
//   )
//  }
