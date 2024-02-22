import React,{useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Switch } from "react-native";
import Navbar from '../components/Navbar';


function Account({navigation}) {
    
  return (
    <View style={styles.container}>
        




        
      <Navbar navigation={navigation} />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    
})

export default Account
