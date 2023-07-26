import React from "react";
import { Alert, Image, StatusBar } from 'react-native'
import { View, TextInput, Text } from 'react-native';
import { SignUp } from "../component/Buttons";
import TextInputs from "../component/TextInputs";
import StackNav from "../Navigation/StackNav";

const EmailSignIn = ({navigation}) => {
    return (
        <>  

        <StatusBar hidden={true} color="white" backgroundColor='white'/>
            <View style={{flex:3,backgroundColor:"white" }} >
                <View style={{flex:2}} >
                    <Image source={require('../images/group.png')} style={{maxWidth:"90%",maxHeight:"100%",marginLeft:"5%"}} />
                </View>

                <View style={{  flex:1,marginLeft:"5.5%",paddingBottom:"18%"}} >


                    <Text style={{ color: "grey" }} >E-MAIL ADDRESS</Text>
                        <TextInputs/>
                    <Text style={{ marginTop: "2%", color: "grey" }} >PASSWORD</Text>
                    <TextInputs/>
                    <View style={{ marginTop: "5%", flexDirection: "row", columnGap: 45 }}  >
                        <SignUp />
                        <Text style={{ color: "red", fontSize: 16, paddingTop: "3.5%" }} onPress={() => Alert.alert("Password has been sent to your Registered Email Address")} >Forgot Password?</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:"25%"}}>
                        <Text style={{ color:"grey",marginRight:"6%"}} onPress={()=> alert('Redirecting to previous page')}  > {"<< Go Back"} </Text>
                    </View>
                </View>

            </View>

        </>




    )
}
export default EmailSignIn;

{/* <View>
                <View style={{marginLeft:25}} >
                    <Image source={require('../images/group.png') }  />
                </View>

            </View> */}