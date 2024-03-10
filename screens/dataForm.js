import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import BackgroundImage from "../components/background";
import Navbar from "../components/navbar";
import Dropdown from "../components/dropdown";
import { SafeAreaView } from "react-native-safe-area-context";

const DataForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    bambooSpecies: "",
    chemicalWeight: "",
    bambooWeight: "",
  });
  const [selected, setSelected] = useState("");
  const data = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
    { label: "Four", value: "4" },
    { label: "Five", value: "5" },
  ];

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }}>
        <BackgroundImage>
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
            {!!selected && (
              <Text>
                Selected: label = {selected.label} and value = {selected.value}
              </Text>
            )}
            <Dropdown label="Select Item" data={data} onSelect={setSelected} />

            {/* <TextInput
                label="BambooSpecies (बांबूची प्रजात)"
                value={formData.bambooSpecies}
                onChangeText={(text) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    bambooSpecies: text,
                  }))
                }
                style={styles.input}
              /> */}
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
                setFormData((prevData) => ({
                  ...prevData,
                  bambooWeight: text,
                }))
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
        </BackgroundImage>
      </ScrollView>
    </View>
  );
};

export default DataForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  scroll: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 20,
  },
  input: {
    marginBottom: 15,
    fontWeight: "bold",
  },
  logoContainer: {
    flexDirection: "row",
    //    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    //    paddingTop: 20, // Adjusted paddingTop
  },
  button: {
    width: "100%",
    backgroundColor: "#6A793E",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
