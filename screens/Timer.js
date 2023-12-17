import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";
import { Timer } from "react-native-stopwatch-timer";
import { Button, TextInput } from "react-native-paper";
import BackgroundImage from "../components/background";

const TimerPro = () => {
  const navigation = useNavigation();
  const seconds = 1000;
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [formData, setFormData] = useState({
    hours: 0,
    minutes: 0,
  });
  const [timerDuration, setTimerDuration] = useState(
    formData.hours * 60 * 60 + formData.minutes * 60
  );

  const totalDuration = () => {
    // const hours = parseInt(formData.hours);
    // const minutes = parseInt(formData.minutes);
    // setTimerDuration(hours * 60 * 60 + minutes * 60);
    // console.log("Timer", timerDuration);
    setIsTimerStart(false);
    setResetTimer(true);
  };

  useEffect(() => {
    // Calculate total duration in seconds when formData.hours or formData.minutes change
    const totalSeconds =
      parseInt(formData.hours) * 60 * 60 + parseInt(formData.minutes, 10) * 60;
    setTimerDuration(totalSeconds);
    console.log("Timer", timerDuration);
  }, [formData]);

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Navbar />
        <View style={styles.timer}>
          <View style={styles.timerContent}>
            <TextInput
              label="Number of Hours (तासांची संख्या)"
              value={formData.hours}
              onChangeText={(text) =>
                setFormData((prevData) => ({ ...prevData, hours: text }))
              }
              style={styles.input}
            />
            <TextInput
              label="Number of Minutes (मिनिटांची संख्या)"
              value={formData.minutes}
              onChangeText={(text) =>
                setFormData((prevData) => ({ ...prevData, minutes: text }))
              }
              style={styles.input}
            />
            <Button onPress={totalDuration}>Display Timer</Button>
          </View>
          <View style={styles.sectionStyle}>
            <Timer
              totalDuration={timerDuration * seconds}
              //Time Duration
              start={isTimerStart}
              //To start
              reset={resetTimer}
              //To reset
              options={options}
              //options for the styling
              handleFinish={() => {
                alert("Timer Completed!!");
              }}
            />
            <View style={styles.timerButtons}>
              <TouchableHighlight
                onPress={() => {
                  if (timerDuration === 0) {
                    // Alert the user when the timer duration is 0
                    alert(
                      "Please set a non-zero timer duration before starting."
                    );
                  } else {
                    setIsTimerStart(!isTimerStart);
                    setResetTimer(false);
                  }
                }}
              >
                <Text style={styles.timeButtonsText}>
                  {!isTimerStart ? "START" : "STOP"}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setIsTimerStart(false);
                  setResetTimer(true);
                  setFormData({
                    hours: 0,
                    minutes: 0,
                  });
                }}
              >
                <Text style={styles.timeButtonsText}>RESET</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go Back To Home</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImage>
  );
};

export default TimerPro;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 20, // Adjusted paddingTop
    paddingHorizontal: 20,
    justifyContent: "space-between",
    height: "100%",
  },
  finishImg: {
    width: 10,
    height: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#6A793E",
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
  timer: {
    paddingHorizontal: 16,
    marginBottom: 150,
  },
  timerButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 40,
    gap: 20,
  },
  precautions: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
  sectionStyle: {
    marginTop: 92,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
    // backgroundColor: "transparent", // Added background color
    fontWeight: "bold",
    fontSize: 12,
  },
  timerContent: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 16,
  },
  timeButtonsText: {
    fontSize: 20,
    backgroundColor: "rgb(0,0,0)",
    padding: 10,
    fontWeight: "600",
    color: "white",
  },
});

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
