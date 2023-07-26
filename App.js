import React, { useEffect } from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
// import EventDetails from './src2/Screens/EventDetails';
import Landing from './src2/Screens/Landing';
// import SubScriptionDetails from './src2/Screens/SubScriptionsDetails';
// import Register from './src2/Screens/Register';
// import EmailSignIn from './src2/Screens/EmailSignIn';
import StackNav from './src2/Navigation/StackNav';
// import Scale from './Scale';
// import BuyPlan from './src2/Screens/BuyPlan';
// import ServiceDetails from './src2/Screens/ServiceDetails';
// // import CheckBoxes from './src2/component/CheckBoxes';
import Events from './src2/Screens/Events';
// import Card from './src2/component/Card';
import SplashScreen from 'react-native-splash-screen';
 



const App = () => {


useEffect(()=>{
  setTimeout(()=>{
    console.log('hello')
    SplashScreen.hide()
  },3000)
},[])

  return (
<View style={styles.container}>
  
  {/* <Card/> */}
  {/* <Events/> */}
  {/* <CheckBoxes/> */}
{/* <ServiceDetails/> */}
{/* <StackNav/> */}

{/* <BuyPlan/> */}
{/* <Scale/> */}
{/* <Register/> */}
<Landing/>
</View>
  );
};

export default App;
const styles = StyleSheet.create({
  container:{
    color:"black"
  },
})
