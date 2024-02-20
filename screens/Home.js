import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Navbar from "../components/Navbar";
import SearchBar from "react-native-dynamic-search-bar";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={require('../Assets/profile.png')} style={styles.profileImage} />
          <Text style={styles.welcome}>Welcome User!</Text>
        </View>
      <View style={styles.search}>
        <SearchBar placeholder="Search here" />
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    marginVertical: 10,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  profileContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginHorizontal:15
  },
  profileImage: {
    width: 40, 
    height: 40, 
  },
});

export default Home;
