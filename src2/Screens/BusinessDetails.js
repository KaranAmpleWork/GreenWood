import React from "react";
import { View, Image, Text, StatusBar, Pressable, Alert, ScrollView, ImageBackground } from 'react-native';

// const Offer=(url,text1,text2,text3)=>{
//     return(
//         <View style={{marginTop:"2%", flexDirection: "row", backgroundColor: "white", shadowColor: "black", width: "85%", marginLeft: "7%", height: "20%", shadowOpacity: .1, shadowColor: "black" }} >
//         <Image source={require({url})} style={{ maxHeight:"80%",width: "25%", marginTop: "2%" }} resizeMode="cover" />
//         <View style={{justifyContent:"center",alignItems:"center"}} >
//             <Text style={{ fontSize: 18, fontWeight: "bold" }} >{text1}</Text>
//             <Text style={{ fontSize: 16 }} >{text2}</Text>
//             <Text style={{ color: "grey" }} >{text3}</Text>
//         </View>
//     </View>
//     )
// }


const BusinessDetails = () => {
    return (<>
        <ScrollView>
            <View style={{ backgroundColor: "white" }} >
                <StatusBar hidden={true} />
                <Image source={require('../images/YogaGirl.jpeg')} style={{ maxHeight: "20%", Maxwidth: "90%" }} resizeMode="stretch" />
                <View >
                    <View style={{ marginRight: "2.5%", flexDirection: "column", flexDirection: "row", justifyContent: "space-around", marginTop: "2%" }}>
                        <Text style={{ color: "steelblue", fontWeight: "bold", letterSpacing: .35, fontSize: 25, marginRight: "15%" }}>Gold's gym</Text>
                        <View style={{ backgroundColor: "green", width: "20%", height: "123%", borderRadius: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: "55%", marginTop: "3%%", paddingTop: "5%", color: "white" }} >4.5</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: "2%", flexDirection: "row", justifyContent: 'space-between' }} >
                        <Text style={{ letterSpacing: .35, fontSize: 18, color: "black", marginLeft: "2.5%" }}>Fitness and Training</Text>
                        <Text style={{ fontSize: 14, letterSpacing: .35, color: "grey", marginRight: "5%" }} >124 reviews</Text>
                    </View>
                    <View style={{ flexDirection: "row" }} >
                        <Text style={{ marginTop: "2%", color: "green", marginLeft: "2.5%", letterSpacing: .35, fontSize: 16 }} >OPENED NOW</Text>
                        <Text style={{ letterSpacing: .35, marginTop: "2.3%", color: "grey" }} > {"-10:00 AM - 07:00 PM"}</Text>
                    </View>


                    <View style={{ backgroundColor: "#F2F2F2", width: "100%", height: 80 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", }} ><Text>hi</Text><Text> bye</Text></View>
                        <Text style={{ fontSize: 16, letterSpacing: .27, color: "black", paddingLeft: "5%" }} >Distance 3.7 K.M</Text>
                        <Text style={{ paddingLeft: "5%", fontSize: 14 }}>21 Street Hamshare</Text>
                    </View>
                    <Text style={{ marginLeft: "2.5%", letterSpacing: .27, backgroundColor: "white", color: "#171717", fontSize: 16 }} >{"Today's Offer and Discount"}</Text>

                    <View style={{ marginTop: "2%", flexDirection: "row", backgroundColor: "white", shadowColor: "black", width: "85%", marginLeft: "7%", height: "20%", shadowOpacity: .1, shadowColor: "black" }} >
                        <Image source={require('../images/YogaG1.jpeg')} style={{ maxHeight: "80%", width: "25%", marginTop: "2%" }} resizeMode="cover" />


                        <View style={{ justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "bold" }} >15% off on Cardio and Yoga</Text>
                            <Text style={{ fontSize: 16 }} >on Yearly Subscription</Text>
                            <Text style={{ color: "grey" }} >Exp. 15 Aug 2023</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: "2%", flexDirection: "row", backgroundColor: "white", shadowColor: "black", width: "85%", marginLeft: "7%", height: "20%", shadowOpacity: .1, shadowColor: "black" }} >
                        <Image source={require('../images/YogaG2.jpeg')} style={{ paddingRight: "2%", maxHeight: "60%", width: "25%", marginTop: "5%", paddingLeft: 2 }} resizeMode="cover" />
                        <View style={{ justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontSize: 18, fontWeight: "bold" }} >15% off on Cardio and Yoga</Text>
                            <Text style={{ fontSize: 16 }} >on Yearly Subscription</Text>
                            <Text style={{ color: "grey" }} >Exp. 15 Aug 2023</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, letterSpacing: .27, marginLeft: "5%", color: "grey" }} >About Gold's Gym</Text>
                    <Text style={{ color: "black", letterSpacing: .27, marginTop: "1%", marginLeft: "2%", marginRight: "2%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <Text style={{ marginTop: "2%", marginLeft: "2%", fontSize: 18, color: "grey" }} >Our Offerings</Text>
                    <View style={{ marginTop: "2%" }} >

                        <Image source={require('../images/CardioComp.jpeg')} style={{ height: "20%", width: "20%" }} />
                        <Image source={require('../images/MuscleComp.jpeg')} style={{ height: "25%", width: "25%" }} />

                    </View>
                </View>
            </View>


        </ScrollView>
    </>

    )

}
export default BusinessDetails;