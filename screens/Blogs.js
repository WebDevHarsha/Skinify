import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function Blogs({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Card
          title="Card Title"
          description="This is a sample card description."
          imageSource={require('../Assets/blogs.png')}
        />
        <Card
          title="Card Title"
          description="This is a sample card description."
          imageSource={require('../Assets/blogs.png')}
        />
        <Card
          title="Card Title"
          description="This is a sample card description."
          imageSource={require('../Assets/blogs.png')}
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
