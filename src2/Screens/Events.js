import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../component/Card';

const Events = () => {
    
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.box1}>
        <Text style={styles.heading}>Events</Text>
        <Icon name="location-outline" style={styles.location} />
      </View>
      <View>
        <Card />
      </View>
    </View>
  );
};
export default Events;

const styles = StyleSheet.create({
  container: {
    height: scale(800),
    width: scale(375),
    backgroundColor:'#F6F6F6',
    color:'black',
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: scale(30),
  },
  heading: {
    letterSpacing: scale(0.83),
    fontSize: scale(30),
    color:'black'
  },
  location: {
    fontSize: scale(36),
    color: '#4F4F4F',
  },
});
