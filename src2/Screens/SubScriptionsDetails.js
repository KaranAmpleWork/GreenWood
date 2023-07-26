import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import StackNav from '../Navigation/StackNav';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import Scale from '../../Scale';

const SubScriptionDetails = ({navigation}) => {
  return (
    <>
      <ScrollView style={Styles.scroll}>
        <StatusBar hidden={true} />
        <View>
          <Image
            source={require('../images/GymGirl.jpeg')}
            style={Styles.img}
          />
          <Text style={Styles.Offer}>New Yearly Membership just in 999</Text>
          <Text style={Styles.price}> $999.00 </Text>
          <Text
            style={Styles.About}>
            About Service
          </Text>
          <Text
            style={Styles.textData}
            selectable={true}>
            Lorem Ipsum is simply dummy typesettin when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It
            has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
      
          </Text>
          <Text
            style={Styles.Product}>
            Product By
          </Text>
          <View
            style={Styles.iconWrapper}>
            <View style={Styles.textWrapper}>
              <Image
                source={require('../images/TalwarIcon.jpeg')}
                style={Styles.imgLogo}
                resizeMode="contain"
              />

              <View>
                <Text
                  style={Styles.BrandName}
                  onPress={() =>
                    alert('Talwarkars Home Page is bring Redirect')
                  }>
                  Talwalkars
                </Text>
                <Text style={{flexDirection: 'row'}}>231 Products</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#17C884',
            width: '100vw',
            maxHeight: '10%',
            marginTop: '5%',
            flex: 1,
          }}>
          <Pressable>
            <Text
              onPress={() => Alert.alert('Redirecting to Subscription Page')}
              style={{
                padding: Scale('5%'),
                paddingLeft: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: 19,
              }}>
              Get New Subscription
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};
export default SubScriptionDetails;

const Styles = ScaledSheet.create({
  scroll: {backgroundColor: 'white'},
  img: {maxHeight: '35%@s',
   maxWidth: "100%", 
   height: 320, 
   width: 'auto'},

  Offer: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: '2%',
  },
  price: {
    fontSize: 22,
    marginTop: '2%',
    marginLeft: '4%',
    color: 'darkgreen',
  },
  About:{
    fontSize: 18,
    fontWeight: 500,
    marginTop: '3%',
    marginLeft: '5%',
  },textData:{
    letterSpacing: 0.27,
    marginLeft: '5%',
    marginRight: '5%',
    colot: 'darkGrey',
  },
  Product:{fontWeight: 'bold',
   marginLeft: '5%',
    marginTop: '2.8%'},

  iconWrapper:{
    backgroundColor: '#F2F2F2',
    maxHeight: '10%',
    maxWidth: '87%',
    marginLeft: '5%',
  },
  textWrapper:{marginRight: '26%'
  , flex: 1
  , flexDirection: 'row'},

  imgLogo:{
    maxHeight: '95%',
    maxWidth: '40%',
    width: 20,
    height: 40,
  },
  BrandName:{
    color: '#4A90E2',
    fontSize: 17,
    letterSpacing: 0.47,
    fontWeight: 'bold',
    marginTop: '5.5%',
  }
});
