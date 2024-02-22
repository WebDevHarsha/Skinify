import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import Navbar from "../components/Navbar";

function Settings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.main}>
          <View style={styles.box}>
            <Text>Language</Text>
            <Image source={require("../Assets/arrow.png")}></Image>
          </View>
          <View style={styles.box}>
            <Text>Location</Text>
            <Image source={require("../Assets/arrow.png")}></Image>
          </View>
          <View style={styles.box1}>
            <Text>Email Notifications</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#7b844d" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.box}>
            <Text>Contact Us</Text>
            <Image source={require("../Assets/arrow.png")}></Image>
          </View>
          <View style={styles.box}>
            <Text>Report a bug</Text>
            <Image source={require("../Assets/arrow.png")}></Image>
          </View>
          <View style={styles.box}>
            <Text>Rate in App store</Text>
            <Image source={require("../Assets/arrow.png")}></Image>
          </View>
          <View style={styles.box}>
            <Text>Terms and privacy</Text>
            <Image source={require("../Assets/arrow.png")}></Image>
          </View>

          <View style={styles.log}>
            <TouchableOpacity>
              <Text style={styles.red}>Log Out</Text>
            </TouchableOpacity>
          </View>
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
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom:'25%'
  },
  log: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 40,
  },
  red: {
    color: "red",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "90%",
    backgroundColor: "white",
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  main: {
    alignSelf: "center",
  },
  box1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "90%",
    backgroundColor: "white",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Settings;
