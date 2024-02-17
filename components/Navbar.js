import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Navbar=({ navigation })=> {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../Assets/home.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
            <Image source={require('../Assets/blogs.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <Image source={require('../Assets/camera.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
            <Image source={require('../Assets/profile.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={require('../Assets/settings.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#a2aa7b',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: '#a2aa7b',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderColor: 'darkgreen',
    borderRadius: 3,
  },
});

export default Navbar;
