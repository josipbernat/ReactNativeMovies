import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Constants from "../Constants/Constants.js";
import {
  defaultPadding,
  defaultBackground
} from "../Views/DetailViews/DetailStyling";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: defaultBackground,
    width: width * 0.45
  },
  text: {
    marginTop: 4,
    marginBottom: defaultPadding,
    fontSize: 14,
    backgroundColor: defaultBackground
  },
  photo: {
    aspectRatio: 16 / 9,
    width: "100%",
    backgroundColor: "gray"
  }
});

const trailerRow = props => (
  <View style={styles.container}>
    <Image
      source={{ uri: Constants.IMAGE_TRAILER_PATH(props.item.key) }}
      style={styles.photo}
    />
    <Text style={styles.text} numberOfLines={2}>
      {props.item.name}
    </Text>
  </View>
);

export default trailerRow;
