import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Navbar from "../components/Navbar";
import SearchBar from "react-native-dynamic-search-bar";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../Assets/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.welcome}>Welcome User!</Text>
      </View>
      <View style={styles.search}>
        <SearchBar placeholder="Search here" />
      </View>

      <Text style={styles.appointments}>Upcoming appointments</Text>

      <View style={styles.box}>
        <View style={styles.box1}>
          <Text>20</Text>
          <Text>Tuesday</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.doctor}>Dr.David Smith</Text>
          <Text>Dermatalogist</Text>
          <Text>10:30 am</Text>
        </View>
        {/* <View>
          <Image source={'../Assets/blog1.webp'}></Image>
        </View> */}
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
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  appointments: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  box:{
    flexDirection:'row',
    backgroundColor:'#b9bf9c',
    padding:10,
    width:'90%',
    marginLeft:'5%',
    borderWidth:1,
    borderRadius:10
  },
  box1:{
    height:80,
    width:80,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderRadius:10,
    borderBlockColor:'black'
  },
  box2:{
    justifyContent:'center',
    paddingLeft:10
  },
  doctor:{
    fontWeight:'bold'
  }
});

export default Home;
