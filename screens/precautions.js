import React from "react";
import Common from "../components/common";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/title";
import finish from "../assets/finish.png";
import Navbar from "../components/navbar";
import { FlatList } from "react-native-gesture-handler";

const Precautions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Navbar />
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
        <Text style={styles.precautionText}>4.⁠साइटवर तंबाखूचे सेवन टाळा.</Text>
      </View>
      <Text style={styles.precautionHeading}>मशीन हाताळण्यासाठी सूचना</Text>
      <View style={styles.precautionTextContainter}>
        <Text style={styles.precautionText}>1.⁠सर्वप्रथम सेफ्टी किट घाला.</Text>

        <Text style={styles.precautionText}>
          2. रासायनिक मिश्रानने ड्रॅम भरा.
        </Text>

        <Text style={styles.precautionText}>
          3. त्यांच्यानंतर ड्रममध्ये बांबूचे तुकडे भरा.
        </Text>

        <Text style={styles.precautionText}>4. ड्रम पूर्णपणे बंद करा.</Text>

        <Text style={styles.precautionText}>
          5. तुम्ही सेट केलेल्या इच्छित कालावधीसाठी ड्रम बंद ठेवा.
        </Text>

        <Text style={styles.precautionText}>
          6. वेळेच्या मर्यादेनंतर कृपया ड्रम उघडा.
        </Text>

        <Text style={styles.precautionText}>
          7. ड्रममध्ये भरलेले केमिकल मिश्रन खाली दिलेल्या पाईपच्या मदतीने खाली
          करा (निचरा).
        </Text>

        <Text style={styles.precautionText}>
          8. तुम्ही भरलले बांबूचे तुकडे कृपया बाहेर काढा.
        </Text>

        <Text style={styles.precautionText}>9. ड्रम पूर्णपणे बंद करा.</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Timer")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Precautions;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Adjusted paddingTop
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 140,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  precautionTextContainter: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  precautionHeading: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: 50,
  },
  precautionText: {
    fontSize: 16,
    alignSelf: "flex-start",

  },
});
