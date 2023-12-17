import { StyleSheet, Text, View, useRoute } from "react-native";
import React from "react";

const Title = () => {

  return (
    <View style={[styles.container]}>
      <Text style={styles.title1}>Bamboo</Text>
      <Text style={styles.title2}>Pre-Treatment</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title1: {
    fontSize: 32,
    fontWeight: "700",
    color: '#3C2D1E',
  },
  title2: {
    fontSize: 32,
    fontWeight: "700",
    color : '#3C2D1E',
  },
});
