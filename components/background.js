import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%", // Ensure that the image covers the entire width of the screen
    height: "100%", // Ensure that the image covers the entire height of the screen
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
});

export default BackgroundImage;
