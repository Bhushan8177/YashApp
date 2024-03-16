import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NotifierWrapper } from "react-native-notifier";
import MyStack from "./navigation";

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}
