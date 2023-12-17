// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Title from "../components/title";
import Common from "../components/common";
import logo from "../assets/logo.png";
import BackgroundImage from "../components/background";

const Home = () => {
  // const navigation = useNavigation();
  const banner = "https://media.giphy.com/media/RR32PdmXEwkuzZFKSa/giphy.gif"
    return (
      <BackgroundImage>
        <Common
          titleText="Bamboo Pre-treatment"
          route="DataForm"
          buttonText="Start"
          logo={logo}
        />
      </BackgroundImage>
  );
};

export default Home;
