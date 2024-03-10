import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackgroundImage from "../components/background";
import Navbar from "../components/navbar";

const Precautions = () => {
  const navigation = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.container}>
            <View style={{paddingTop: 0}}>
              <Navbar />
            </View>
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
              <Text style={styles.precautionHeading}>
                मशीन हाताळण्यासाठी सूचना
              </Text>
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

                <Text style={styles.precautionText}>
                  4. ड्रम पूर्णपणे बंद करा.
                </Text>

                <Text style={styles.precautionText}>
                  5. तुम्ही सेट केलेल्या इच्छित कालावधीसाठी ड्रम बंद ठेवा.
                </Text>

                <Text style={styles.precautionText}>
                  6. वेळेच्या मर्यादेनंतर कृपया ड्रम उघडा.
                </Text>

                <Text style={styles.precautionText}>
                  7. ड्रममध्ये भरलेले केमिकल मिश्रन खाली दिलेल्या पाईपच्या
                  मदतीने खाली करा (निचरा).
                </Text>

                <Text style={styles.precautionText}>
                  8. तुम्ही भरलले बांबूचे तुकडे कृपया बाहेर काढा.
                </Text>

                <Text style={styles.precautionText}>
                  9. ड्रम पूर्णपणे बंद करा.
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Timer")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundImage>
  );
};

export default Precautions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    paddingVertical: 50,
    justifyContent: "space-between",
    gap: 10,
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
  container2: {
    marginHorizontal: 18,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3B821D",
    // marginTop: 20,
    backgroundColor: "#E8F6E8",
    borderRadius: 16,
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 100,
  },
  button: {
    width: "90%",
    backgroundColor: "#6A793E",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 55,
    // marginBottom: 150,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  precautionTextContainter: {
    //    marginTop: 15,
    // paddingHorizontal: 10,
  },
  precautionHeading: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "flex-start",
    //    marginTop: 15,
  },
  precautionText: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "500",
  },
});
