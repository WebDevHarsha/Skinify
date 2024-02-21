import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const NonAutomaticCarousel = () => {
  const data = [
    { image: require('../Assets/skin.jpg'),
heading:'Case#001',
text:'Result: Nevus'},
    { image: require('../Assets/skin.jpg'),
heading:'Case#002',
text:'Result: Nevus'},
    { image: require('../Assets/skin.jpg'),
heading:'Case#003',
text:'Result: Nevus'}
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.container}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.para}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 70}
      layout={'default'}
      loop
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth - 60,
    height: 120,
    alignItems: 'center',
    backgroundColor: '#b9bf9c',
    borderRadius: 10,
    flexDirection:'row',
    paddingHorizontal:10,
  },
  container:{
    textAlign:'center',
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'white',
    borderRadius:10,
    height:80,
    marginLeft:10
  },
  image: {
    width: '100%',
    height: 100,
    width:100,
    borderRadius: 10,
  },
  heading:{
    fontWeight:'bold',
    margin:10,
    fontSize:20
  },
  para:{
    paddingHorizontal:20,

  }
});

export default NonAutomaticCarousel;
