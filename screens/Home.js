import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import SearchBar from "react-native-dynamic-search-bar";
import NonAutomaticCarousel from "../components/NonAutomaticCarousel";


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

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
          <Text style={styles.time}>10:30 am</Text>
        </View>
        
      </View>

      <View style={styles.subnav}>
        <Text style={styles.subhead}>
          Last cases
        </Text>
        <Text style={styles.see}>
          see all
        </Text>
      </View>

        <NonAutomaticCarousel />

      <View style={styles.subnav}>
        <Text style={styles.subhead}>
          My doctors
        </Text>
        <Text style={styles.see}>
          see all
        </Text>
      </View>

      <View style={styles.docimg}>
        <Image style={styles.doc} source={require('../Assets/doc1.jpg')}/>
        <Image style={styles.doc} source={require('../Assets/doc2.jpg')}/>

      </View>





      </ScrollView>


      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  docimg:{
    flexDirection:'row',
  },
  doc:{
    width:'45%',
    height:300,
    borderRadius:10,
    margin:10
  },
  scrollView: {
    flex: 1, 
    marginBottom:20
  },
  see:{
    color:'#7b844d'
  },
  subnav:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingTop:20,
    paddingBottom:5
  },
  subhead:{
    fontWeight:'bold',
    fontSize:18
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
  time:{
    backgroundColor:'#7b844d',
    width:75,
    textAlign:'center',
    color:'white',
    borderRadius:10
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
    borderRadius:10,
    marginBottom:20
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
