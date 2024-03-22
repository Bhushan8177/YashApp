import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";

const Navbar = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.logoContainer}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      {/* <View style={styles.titleContainer}> */}
        <Title />
      {/* </View> */}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  logoContainer: {
    padding: 9,
    flexDirection: "row",
    gap: 40,
    alignItems: "center", 
    marginTop: 50,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 16,
    paddingLeft: 40,
    justifyContent: "flex-start",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  logo: {
    width: 60,
    height: 60,
  },
  backButton: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#6A793E",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
