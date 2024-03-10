import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import { Timer } from "react-native-stopwatch-timer";
import BackgroundImage from "../components/background";
import Navbar from "../components/navbar";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token.data;
}

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
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [realTime, setRealTime] = useState(0);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // notificationListener.current =
    //   Notifications.addNotificationReceivedListener((notification) => {
    //     setNotification(notification);
    //   });

    // responseListener.current =
    //   Notifications.addNotificationResponseReceivedListener((response) => {
    //     console.log(response);
    //   });

    // return () => {
    //   Notifications.removeNotificationSubscription(
    //     notificationListener.current
    //   );
    //   Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);

  const totalDuration = () => {
    const hours = parseInt(formData.hours);
    const minutes = parseInt(formData.minutes);
    setTimerDuration(hours * 60 * 60 + minutes * 60);
    console.log("Timer", timerDuration);
    if (!isTimerStart) {
      setIsTimerStart(false);
      setResetTimer(true);
      if (
        timerDuration === NaN ||
        timerDuration === undefined ||
        timerDuration === null
      ) {
        setTimerDuration(0);
      }
    }
  };

  // useEffect(() => {
  //   // Calculate total duration in seconds when formData.hours or formData.minutes change
  //   const totalSeconds =
  //     parseInt(formData.hours) * 60 * 60 + parseInt(formData.minutes, 10) * 60;
  //   if (
  //     timerDuration === NaN ||
  //     timerDuration === undefined ||
  //     timerDuration === null
  //   ) {
  //     setTimerDuration(0);
  //   }
  //   setTimerDuration(totalSeconds);
  //   console.log("Timer", timerDuration);
  // }, [formData]);

  return (
    <>
      <View style={styles.root}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
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
                      setFormData((prevData) => ({
                        ...prevData,
                        minutes: text,
                      }))
                    }
                    style={styles.input}
                  />
                  <Button onPress={totalDuration}>Click Here</Button>
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
                    handleFinish={async () => {
                      console.log("Timer Finished");
                      const message = {
                        to: expoPushToken,
                        sound: "default",
                        title: "Timer Finished!",
                        body: "Please close the machine."
                      };
                    
                      await fetch("https://exp.host/--/api/v2/push/send", {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Accept-encoding": "gzip, deflate",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(message),
                      });
                      setIsTimerStart(false);
                      setResetTimer(true);
                      setFormData({
                        hours: 0,
                        minutes: 0,
                      });
                      setTimerDuration(0);
                    }}
                  />
                  <View style={{ display: "none" }}>
                  <Timer
                    totalDuration={(timerDuration - 50) * seconds}
                    //Time Duration
                    start={isTimerStart}
                    //To start
                    reset={resetTimer}
                    //To reset
                    options={options}
                    //options for the styling
                    handleFinish={async () => {
                      console.log("10 seconds left");
                      const message = {
                        to: expoPushToken,
                        sound: "default",
                        title: "10 seconds remaining!",
                        body: "Please check the timer."
                      };
                    
                      await fetch("https://exp.host/--/api/v2/push/send", {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Accept-encoding": "gzip, deflate",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(message),
                      });
                    }}
                  />
                </View>
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
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Home")}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Go Back To Home</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BackgroundImage>
        </ScrollView>
      </View>
    </>
  );
};

export default TimerPro;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  finishImg: {
    width: 10,
    height: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
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
    //    marginBottom: 150,
  },
  timerButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 40,
    gap: 20,
  },
  sectionStyle: {
    //    marginTop: 92,
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
