import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Dr. Bamboo</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: 'black',
  },
});
