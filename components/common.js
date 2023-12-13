import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/title";

const Common = ({
  titleText,
  route,
  subTitle,
  banner,
  buttonText,
  logo,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        { titleText !== "Bamboo" && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Title titleText={titleText} />
      </View>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: banner }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Common;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 20, // Adjusted paddingTop
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  logoContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40, // Adjusted paddingTop
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 8,
  },
  backButton: {
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: "#1A759F",
  },
});
