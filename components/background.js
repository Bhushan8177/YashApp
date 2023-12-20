import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const BackgroundImage = ({ children }) => {
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        source={require("../assets/bg3.jpg")}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
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
