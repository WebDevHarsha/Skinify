import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function Blogs({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Card
          title="Unveiling a Personalized Path to Glowing Complexion"
          description="Dive into the world of AI-powered skin analysis, explore how it personalizes your skincare routine, and..."
          imageSource={require('../Assets/blog1.webp')}
        />
        <Card
          title="How AI Skincare Apps Go Deeper Than Skin Deep"
          description="Unravel the science behind AI skin analysis, uncover hidden concerns beneath the surface, and..."
          imageSource={require('../Assets/blog2.jpg')}
        />
        <Card
          title="My Journey with AI-Driven Skincare"
          description="My skin was a mystery, but this AI app cracked the code! Glow-up achieved ✨"
          imageSource={require('../Assets/blog3.png')}
        />
      </ScrollView>
    
    <Navbar navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 60, 
  },
});

export default Blogs;
