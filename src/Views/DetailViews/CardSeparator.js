import React from "react";
import { View, StyleSheet } from "react-native";

const cardSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
    backgroundColor: "#f4f4f4"
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E3E3E3"
  }
});

export default cardSeparator;
