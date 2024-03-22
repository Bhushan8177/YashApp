import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import BackgroundImage from "../components/background";
import Navbar from "../components/navbar";
import { SelectList } from "react-native-dropdown-select-list";

const DataForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    bambooSpecies: "",
    chemicalWeight: "",
    bambooWeight: "",
  });

  const data = [
    { key: "0", value: "Select Your Category (बांबूच्या प्रजाती निवडा)" },
    { key: "1", value: "Bambusa Ventricosa" },
    { key: "2", value: "Dendrocalamus Asper" },
    { key: "3", value: "Schizostachyum Brachycladum" },
    { key: "4", value: "Bambusa Nutans" },
    { key: "5", value: "Bambusa Arnhemica" },
    { key: "6", value: "DDendrocalamopsis Variostriata" },
    { key: "7", value: "Bambusa Heterostachya" },
    { key: "8", value: "Bambusa Oldhamii" },
    { key: "9", value: "Bambusa Textilis" },
    { key: "10", value: "Cephalostachyam Pergracile" },
    { key: "11", value: "Bambusa Chungii" },
    { key: "12", value: "Bambusa Vulgaris CV Wamin" },
    { key: "13", value: "Others" },
  ];

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };
  const [selected, setSelected] = useState(formData.bambooSpecies);  

  const navigation = useNavigation();

  return (
    <BackgroundImage>
      <View style={styles.root}>
        <ScrollView>
            <View style={{marginBottom: 50}}>
              <Navbar />
            </View>
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

            <SelectList
              setSelected={(text) =>setSelected(text)}
              data={data}
              save="value"
              placeholder= {"Select Bamboo Category (बांबूच्या प्रजाती निवडा)" || {selected} }
              boxStyles={{
                backgroundColor: "#E6E0EC",
                borderColor: "#E6E0EC",
                borderBottomWidth: 1,
                borderBottomColor: "#8C898F",
                borderRadius: 0,
              }}
              dropdownStyles={{backgroundColor: "#E6E0EC"}}
              inputStyles={{color: "#4C4752" , fontWeight: "700", fontSize: 14}}
            />
            {selected === "Others" && (
              // setSelected(""),
              <TextInput
              label="Enter BambooSpecies (बांबूची प्रजात)"
              value={formData.bambooSpecies}
              onChangeText={(text) =>
                setFormData((prevData) => ({
                  ...prevData,
                  bambooSpecies: text,
                }))
              }
              style={styles.input}
              />
            )}
            {/* // <TextInput
            //     label="Enter BambooSpecies (बांबूची प्रजात)"
            //     value={formData.bambooSpecies}
            //     onChangeText={(text) =>
            //       setFormData((prevData) => ({
            //         ...prevData,
            //         bambooSpecies: text,
            //       }))
            //     }
            //     style={styles.input}
            //   /> */}
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
                setSelected("");
                setFormData({
                  username: "",
                  bambooSpecies: "",
                  chemicalWeight: "",
                  bambooWeight: "",
                });
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
        </ScrollView>
      </View>
    </BackgroundImage>
  );
};

export default DataForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 40,
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
    //    paddingTop: 20
    // color: 
  },
  button: {
    backgroundColor: "#6A793E",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 160,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});