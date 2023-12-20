import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import Title from "../components/title";
import { useNavigation } from "@react-navigation/native";



const navbar = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.logoContainer}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        {/* <Image source={logo} style={styles.logo} resizeMode="contain" /> */}
        <Title />
      </View>
    </View>
  );
};

export default navbar;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40, // Adjusted paddingTop
  },
  titleContainer : {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginRight: 80,
  },
  logo: {
    width: 60,
    height: 60,
  },
  backButton: {
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: "#6A793E",

  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
