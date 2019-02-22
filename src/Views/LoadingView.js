import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { defaultBackground } from "./DetailViews/DetailStyling";

const loadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultBackground
  },
  loading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#333333",
    backgroundColor: defaultBackground
  }
});

export default loadingView;
