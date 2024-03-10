// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Title from "../components/title";
import { StyleSheet, View } from "react-native";
import logo from "../assets/logo.png";
import BackgroundImage from "../components/background";
import Common from "../components/common";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  // const navigation = useNavigation();

  return (
      <View style={styles.root}>
        <BackgroundImage>
          <Common
            titleText="Bamboo Pre-treatment"
            route="DataForm"
            buttonText="Start"
            logo={logo}
          />
        </BackgroundImage>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
