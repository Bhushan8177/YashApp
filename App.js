import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import MyStack from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
