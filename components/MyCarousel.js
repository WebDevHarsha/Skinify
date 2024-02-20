import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = () => {
  const data = [
    { image: require('../Assets/carousel1.jpg'),
    heading:'Your personalised skin care AI',
  text:'Get expert guidance with AI skin analysis & customized routines.' },
    { image: require('../Assets/carousel1.jpg'),
    heading:'Struggling with breakouts or dryness?',
  text:'Get personalized solutions to achieve your skin goals.' },
    { image: require('../Assets/carousel1.jpg'),
    heading:'Join #Skinify:',
  text:'See amazing skincare transformations from our community.' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.para}>{item.text}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 60}
      layout={'default'}
      loop
      autoplay
      autoplayDelay={500}
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth - 60,
    height: 450,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '70%',
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

export default MyCarousel;
