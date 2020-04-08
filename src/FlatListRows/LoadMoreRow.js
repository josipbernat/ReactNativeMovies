import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const loadMoreRow = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 44
  }
});

export default loadMoreRow;
