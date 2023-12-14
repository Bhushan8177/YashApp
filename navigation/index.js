import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home";
import DataForm from "../screens/dataForm";
import Precautions from "../screens/precautions";
import Timer from "../screens/timer";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DataForm"
        component={DataForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Precautions"
        component={Precautions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
