import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EmailSignIn from "../Screens/EmailSignIn";
import Register from "../Screens/Register";
import Landing from "../Screens/Landing";
import SubScriptionDetails from "../Screens/SubScriptionsDetails";
import EventDetails from "../Screens/EventDetails";


const Stack = createNativeStackNavigator();
const StackNav =()=>{
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={Landing}/>
                <Stack.Screen name="Email" component={EmailSignIn}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="SubscriptionDetails" component={SubScriptionDetails}/>
                <Stack.Screen name="EventDetails" component={EventDetails}/>
            </Stack.Navigator>
        </NavigationContainer>


    )
}
export default StackNav;