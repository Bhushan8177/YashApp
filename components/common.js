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
            सुरक्षितता मार्गदर्शक तत्त्वे.
          </Text>
          <View style={styles.precautionTextContainter}>
            {/* <FlatList> */}
            <Text style={styles.precautionText}>
              1.⁠⁠सर्वप्रथम तुमच्या सुरक्षिततेसाठी सेफ्टी शूज घाला.
            </Text>
            <Text style={styles.precautionText}>
              2. डोळ्यांच्या सुरक्षेसाठी गॉगल वापरा.
            </Text>
            <Text style={styles.precautionText}>
              3.⁠कामांसाठी योग्य हातमोजे घाला.
            </Text>
            <Text style={styles.precautionText}>
              4.⁠साइटवर तंबाखूचे सेवन टाळा.
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
    width: "100%",
    backgroundColor: "#6A793E",
    borderRadius: 16,
    marginBottom: 30,
    justifyContent: "center",
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
    gap: 50,
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
    // display: "flex",
    // gap: 10,
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
