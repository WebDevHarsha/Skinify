import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = () => {
  const data = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    // Add more slides as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyCarousel;
