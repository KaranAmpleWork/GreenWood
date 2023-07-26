import React from 'react';
import {View, Text, Image, StatusBar, ScrollView, StyleSheet} from 'react-native';
import { SignIn } from '../component/Buttons';

const EventDetails = () => {
  return (
    <View style={{marginBottom: 'auto',backgroundColor:"white"}}>
      <ScrollView>
        <StatusBar hidden="true" />
        <View>
          <Image
            source={require('../images/Party.jpeg')}
            resizeMode="cover"
            style={{height: 200, width: 400}}
          />
          <View
            style={{
              flexDirection: 'row',
              letterSpacing: 0.27,
             
              marginLeft: 5,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                columnGap:.27,
                letterSpacing: 0.27,
                color: 'darkblue',
              }}>
              {`LOVE + PROPAGANDA 
 SATURDAY'S ${'(seriesgrp)'}`}
            </Text> 
                
                <Text>{"MAY"}</Text>
                <Text style={{fontWeight:"bold",paddingTop:20,paddingRight:20}} >{"26"}</Text>
                         </View>
          <Text style={{marginLeft: 20, marginTop: 10}}>
            {'by Mind the Product'}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              marginRight: '4%',
              color: 'green',
              fontSize: 12,
              marginTop: 5,
            }}>
            {'$809-$999'}
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 5,
              color: '#4F4F4F',
              fontSize: 16,
              letterSpacing: 0.36,
            }}>
            Description
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#4F4F4F',
              marginLeft: 16,
              marginRight: 12,
              letterSpacing: 0.28,
              marginTop: 5,
            }}>
            {
              "Dance at San Francisco's premier dance-club featuring the best open-format DJs from all over. NO COVER with RSVP for you and all your friends or reserve a VIP section."
            }
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 11,
              letterSpacing: 0.31,
              marginTop: 10,
            }}>
            {' '}
            {'VIP TABLE RESERVATIONS TEXT: 415.766.8114'}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#4F4F4F',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              fontWeight:"bold",
              letterSpacing:.28
            }}>
            {"Experience the all new Love + Propaganda San Francisco."}
          </Text>
          <Text style={{color: '#4F4F4F', margin: 10, fontSize: 12,letterSpacing:.36}}>
          {"Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged, as L+P prides itself on the attention put forth to recognize the much broader community of widely acclaimed international and underground producers, DJs, and overall talent that you won’t find anywhere else."}
          </Text>
          <Text style={{letterSpacing: 0.31, fontSize: 11, marginLeft: '5%'}}>
            {'85 CAMPTON PL., SAN FRANCISCO CA'}
          </Text>
          <Text style={{color: '#4F4F4F',letterSpacing:.36, marginLeft: 18, marginTop: 10}}>
            {'Date & Time'}
          </Text>
          <Text style={Styles.date}>{"Sat, May 25, 2019, 9:30 PM – Sun, May 26, 2019, 2:00 AM PDT"}</Text>
            <Text style={Styles.location}>Location</Text>
            <Text
            style={Styles.locDetails}>{`Love + Propaganda 85 Campton Place 
            San  Francisco, CA 94108 
             United States`}</Text>
             <View style={Styles.button} >
             <SignIn style={Styles.button} text="ARE YOU INTRESTED?"/>
             </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EventDetails;

  const Styles = StyleSheet.create(
      {
        date:{
          color: '#4F4F4F',
           margin: 10, fontSize: 11,
           marginLeft:12
        },
        location:{
          marginLeft:15,
          color: '#4F4F4F',
          letterSpacing:.36
        },
        locDetails:{
          color: '#4F4F4F',
           margin: 10, fontSize: 11,
           marginLeft:12,
           letterSpacing:.28
        },
        button:{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: "#00FF7F",
        }
      }
  )

