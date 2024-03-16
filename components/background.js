import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";


const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/bg3.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.bgContainer}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
});

export default BackgroundImage;
