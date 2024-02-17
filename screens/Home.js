import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>hello world!</Text>
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  content: {
   
  },
});

export default Home;
