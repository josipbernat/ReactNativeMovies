import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultBackground, styles as detailStyles } from "./DetailStyling";
import CardSeparator from "./CardSeparator";

const descriptionView = props => {
  return (
    <View style={styles.container}>
      <Text style={detailStyles.title}>Description</Text>
      <Text style={detailStyles.subtitle}>{props.item.overview}</Text>
      <CardSeparator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: defaultBackground,
    width: "100%"
  }
});

export default descriptionView;
