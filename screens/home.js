// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Title from "../components/title";
import { SafeAreaView, StyleSheet } from "react-native";
import logo from "../assets/logo.png";
import BackgroundImage from "../components/background";
import Common from "../components/common";

const Home = () => {
  // const navigation = useNavigation();
  const banner = "https://media.giphy.com/media/RR32PdmXEwkuzZFKSa/giphy.gif";
  return (
    <>
      <SafeAreaView style={styles.root}>
        <BackgroundImage>
          <Common
            titleText="Bamboo Pre-treatment"
            route="DataForm"
            buttonText="Start"
            logo={logo}
          />
        </BackgroundImage>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
