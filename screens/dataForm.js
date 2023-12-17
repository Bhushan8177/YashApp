import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from "react-native-paper";
import Navbar from "../components/navbar";
import BackgroundImage from "../components/background";

const DataForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    bambooSpecies: "",
    chemicalWeight: "",
    bambooWeight: "",
  });

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Navbar />

        {/* Form Section */}
        <View style={styles.formContainer}>
          <TextInput
            label="Username (नाव)"
            value={formData.username}
            onChangeText={(text) =>
              setFormData((prevData) => ({ ...prevData, username: text }))
            }
            style={styles.input}
          />

          <TextInput
            label="BambooSpecies (बांबूची प्रजात)"
            value={formData.bambooSpecies}
            onChangeText={(text) =>
              setFormData((prevData) => ({
                ...prevData,
                bambooSpecies: text,
              }))
            }
            style={styles.input}
          />
          <TextInput
            label="Chemical Weight (घन वजन) (in litres) "
            value={formData.chemicalWeight}
            onChangeText={(text) =>
              setFormData((prevData) => ({
                ...prevData,
                chemicalWeight: text,
              }))
            }
            style={styles.input}
          />
          <TextInput
            label="Bamboo Weight (बांबूची वजन) (in kgs) "
            value={formData.bambooWeight}
            onChangeText={(text) =>
              setFormData((prevData) => ({ ...prevData, bambooWeight: text }))
            }
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Precautions");
              {
                handleFormSubmit();
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{"Next"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default DataForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Adjusted paddingTop
    paddingHorizontal: 20,
    height: "100%",
  },
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 100, // Adjusted marginTop for better visibility
    gap: 20,
  },
  input: {
    marginBottom: 10,
    // backgroundColor: "transparent", // Added background color
    fontWeight: "bold",
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
  },
  button: {
    width: "100%",
    backgroundColor: "#6A793E",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 220,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
