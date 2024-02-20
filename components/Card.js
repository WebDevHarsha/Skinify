import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Image source={props.imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardDescription}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    borderWidth:2,
    borderColor:'lightgray',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default Card;
