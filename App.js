import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, ImageBackground } from "react-native";
import MyStack from "./navigation";
import { NotifierWrapper } from "react-native-notifier";

export default function App() {
  return (
    <NotifierWrapper>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NotifierWrapper>
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

