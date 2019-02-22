import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Constants from "../Constants/Constants.js";
import {
  defaultPadding,
  defaultBackground
} from "../Views/DetailViews/DetailStyling";
const { width } = Dimensions.get("window");

const itemWidth = (width - defaultPadding * 4) / 3.5;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: defaultBackground
  },
  text: {
    marginTop: 4,
    fontSize: 14,
    marginBottom: defaultPadding,
    backgroundColor: defaultBackground,
    width: itemWidth,
    textAlign: "center"
  },
  photo: {
    height: itemWidth,
    width: itemWidth,
    borderRadius: itemWidth / 2,
    backgroundColor: "gray"
  }
});

const castRow = props => (
  <View style={styles.container}>
    <Image
      source={{ uri: Constants.IMAGE_PROFILE_PATH(props.item.profile_path) }}
      style={styles.photo}
    />
    <Text style={styles.text} numberOfLines={2}>
      {props.item.name}
    </Text>
  </View>
);

export default castRow;
