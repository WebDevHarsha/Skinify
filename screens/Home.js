import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import SearchBar from "react-native-dynamic-search-bar";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
      <SearchBar
  placeholder="Search here"
/>
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
  search: {
   
  },
});

export default Home;
