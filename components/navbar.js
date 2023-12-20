import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";

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
    flex: 1,
    padding: 9,
    flexDirection: "row",
    gap: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
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
    backgroundColor: "#6A793E",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
