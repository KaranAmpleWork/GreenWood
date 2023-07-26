import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

// const [selected,setSelected] = useState(true);


const cardData = [
  {
    id: "1",
    name: "laptop-outline",
    description: "Technology",
  },
  {
    id: "2",
    name: "fitness-outline",
    description: "fitness",
  },
  {
    id: "3",
    name: "game-controller-outline",
    description: "gaming",
  },
  {
    id: "4",
    name: "barbell-outline",
    description: "Strength",
  }
  // Add more card data as needed
];

const CardItem = ({ name, description}) => {
  return(
  <View style={[styles.card, { backgroundColor: '#FFFFFF' }]}>
    <Icon name={name} style={styles.icon}/>
    <Text style={styles.description}>{description}</Text>
  </View>
  )
  }
  const renderItem = ({ item }) => {
    console.log("item",item);
    return(
    <CardItem
      name={item.name}
      description={item.description}
      color={item.color}
    />
    )
    }


const Card = () => {
  
    

  return (
    <View style={styles.back} >
    {/* <Text>hii</Text> */}
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 20

  // },
  card: {
    width: 120,
    height: 70,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff"
  },
  description: {
    fontSize: 11,
    color: "#fff"
  },
  icon:{
    fontSize:26,
    color:'black'
  },
  back:{
    
  }
});
export default Card;
