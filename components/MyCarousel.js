import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = () => {
  const data = [
    { image: require('../Assets/carousel1.jpg'),
  text:'hello' },
    { image: require('../Assets/carousel1.jpg'),
  text:'hello' },
    { image: require('../Assets/carousel1.jpg'),
  text:'hello' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.text}</Text>
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
});

export default MyCarousel;
