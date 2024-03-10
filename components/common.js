import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";

const Common = ({ titleText, route, subTitle, banner, buttonText, logo }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {titleText !== "Bamboo Pre-treatment" && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Title />
      </View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.precautionHeading}>
          ॲप हाताळण्यासाठी सूचना
          </Text>
          <View style={styles.precautionTextContainter}>
            {/* <FlatList> */}
            <Text style={styles.precautionText}>
              1. ⁠आपले नांव लिहा
            </Text>
            <Text style={styles.precautionText}>
              2. बांबूची प्रजाती निवडा किंवा प्रविष्ट करा
            </Text>
            <Text style={styles.precautionText}>
              3. रासायनिक वजन आणि बांबूचे वजन प्रविष्ट करा
            </Text>
            <Text style={styles.precautionText}>
              4.Next दाबा
            </Text>
            <Text style={styles.precautionText}>
              4.तास आणि मिनिटांची संख्या प्रविष्ट करा
            </Text>
            <Text style={styles.precautionText}>
              4.Click Here दाबा
            </Text>
            <Text style={styles.precautionText}>
              4.प्रारंभ करण्यासाठी Start क्लिक करा
            </Text>

          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(route)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Common;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  banner: {
    height: 400,
    width: 400,
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    opacity: 0.9,
  },
  // bannerContainer: {
  //   flex: 1,
  // },
  container: {
    padding: 9,
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  buttonContainer: {
    backgroundColor: "#6A793E",
    borderRadius: 16,
    marginBottom: 30,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button: {
    minWidth: "90%",
    backgroundColor: "#6A793E",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
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
    paddingTop: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 8,
  },
  backButton: {
    padding: 16,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: "#1A759F",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    gap: 100,
  },
  container1: {
    marginHorizontal: 18,
    paddingHorizontal: 15,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3B821D",
    backgroundColor: "#E8F6E8",
    borderRadius: 16,
    paddingVertical: 10,
  },
  precautionTextContainter: {
      //  marginTop: 15,
    paddingHorizontal: 5,
    display: "flex",
    gap: 5,
  },
  precautionHeading: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 10,
  },
  precautionText: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "500",
  },
});
