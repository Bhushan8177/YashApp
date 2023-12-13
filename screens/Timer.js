import React from "react";
import Common from "../components/common";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/title";
import finish from "../assets/finish.png";
import Navbar from "../components/navbar";
import { FlatList } from "react-native-gesture-handler";

const Timer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.timer}>
        {/* <FlatList> */}
            <Text style={styles.timerText}>Timer</Text>
            <Text style={styles.timerText}>00:00:00</Text>
            {/* </FlatList> */}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;


const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Adjusted paddingTop
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 650,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  precautions: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
});
