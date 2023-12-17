import React from "react";
import Common from "../components/common";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";
import BackgroundImage from "../components/background";


const Precautions = () => {
  const navigation = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Navbar />
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
        <View style={styles.container2}>
          <Text style={styles.precautionHeading}>मशीन हाताळण्यासाठी सूचना</Text>
          <View style={styles.precautionTextContainter}>
            <Text style={styles.precautionText}>
              1.⁠सर्वप्रथम सेफ्टी किट घाला.
            </Text>

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
              7. ड्रममध्ये भरलेले केमिकल मिश्रन खाली दिलेल्या पाईपच्या मदतीने
              खाली करा (निचरा).
            </Text>

            <Text style={styles.precautionText}>
              8. तुम्ही भरलले बांबूचे तुकडे कृपया बाहेर काढा.
            </Text>

            <Text style={styles.precautionText}>9. ड्रम पूर्णपणे बंद करा.</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Timer")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImage>
  );
};

export default Precautions;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Adjusted paddingTop
    paddingHorizontal: 20,
    height: "100%",
  },
  container1 : {
    // flex: 1,
    paddingHorizontal : 15,
    paddingBottom : 20,
    // justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3B821D",
    marginTop: 20,
    backgroundColor: "#E8F6E8",
    borderRadius: 16,
  },
  container2 : {
    // flex: 1,
    paddingHorizontal : 15,
    paddingBottom : 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3B821D",
    marginTop: 20,
    backgroundColor: "#E8F6E8",
    borderRadius: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#6A793E",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  precautionTextContainter: {
    marginTop: 20,
    // paddingHorizontal: 10,
  },
  precautionHeading: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: 20,
  },
  precautionText: {
    fontSize: 18,
    alignSelf: "flex-start",
    fontWeight: "500",
  },
});
