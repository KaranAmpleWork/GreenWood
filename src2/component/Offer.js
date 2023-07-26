import React from "react"

import {View,Text,Image} from 'react-native';
const Offer = (path, text1, text2, text3) => {
    return (
        <View style={{ marginTop: "2%", flexDirection: "row", backgroundColor: "white", shadowColor: "black", width: "85%", marginLeft: "7%", height: "20%", shadowOpacity: .1, shadowColor: "black" }} >
            <Image source={require({ path })} style={{ maxHeight: "80%", width: "25%", marginTop: "2%" }} resizeMode="cover" />
            <View style={{ justifyContent: "center", alignItems: "center" }} >
                <Text style={{ fontSize: 18, fontWeight: "bold" }} >{text1}</Text>
                <Text style={{ fontSize: 16 }} >{text2}</Text>
                <Text style={{ color: "grey" }} >{text3}</Text>
            </View>
        </View>
    )
}
export default Offer