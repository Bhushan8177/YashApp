import React from "react";
import Common from "../components/common";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/title";
import finish from "../assets/finish.png";
import Navbar from "../components/navbar";
import { FlatList } from "react-native-gesture-handler";

const Precautions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.precautions}>
        {/* <FlatList> */}
          <Text style={styles.precautionText}>1. Wear a mask</Text>
          <Text style={styles.precautionText}>2. Wash your hands</Text>
          <Text style={styles.precautionText}>3. Maintain social distancing</Text>
          <Text style={styles.precautionText}>4. Avoid touching your face</Text>
          <Text style={styles.precautionText}>5. Stay home if you feel unwell</Text>
          <Text style={styles.precautionText}>6. Cover your cough</Text>
          <Text style={styles.precautionText}>7. Seek medical attention if you have a fever, cough and difficulty breathing</Text>
        {/* </FlatList> */}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Timer")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Precautions;


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
    marginTop: 500,
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
