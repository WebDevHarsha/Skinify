import React from 'react'
import MyCarousel from '../components/MyCarousel'
import { StyleSheet, TouchableOpacity,Image, Text, View } from 'react-native';


const Initial=({navigation})=> {
  
  return (
    <View style={styles.container}>
    <MyCarousel></MyCarousel>
    <TouchableOpacity onPress={() => navigation.navigate('Choosing')} style={styles.next}>
      <Text>Next</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      paddingTop:20,
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
    },
    next:{
      backgroundColor:'#a2aa7b',
      padding:10,
      paddingVertical:12,
      width:200,
      alignItems:'center',
      marginBottom:25,
      borderWidth:1,
      borderColor:'darkgreen',
      borderRadius:100
    }
})


export default Initial
