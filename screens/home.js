// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Title from "../components/title";
import Common from "../components/common";
import logo from "../assets/logo.png";

const Home = () => {
  // const navigation = useNavigation();
  const banner = "https://media.giphy.com/media/RR32PdmXEwkuzZFKSa/giphy.gif"
    return (
    <Common
      titleText="Yash ka App"
      route="DataForm"
      banner={banner}
      buttonText="Start"
      logo={logo}
    />

  );
};

export default Home;
