import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Moment from "moment";
import flatMap from "flatmap";
import { defaultBackground, styles as detailStyles } from "./DetailStyling";
import CardSeparator from "./CardSeparator";

const titleView = props => {
  getSubtitle = props => {
    Moment.locale("en");

    let genreNames = flatMap(props.item.genres, e => e.name);
    var text = genreNames.join(", ");
    text += " · " + props.item.runtime + " min";
    text += " · " + Moment(props.item.release_date).format("MMM Do YYYY");
    return text;
  };

  return (
    <View style={styles.container}>
      <Text style={detailStyles.title}>{props.item.title}</Text>
      <Text style={detailStyles.subtitle}>{this.getSubtitle(props)}</Text>
      <CardSeparator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: defaultBackground,
    width: "100%"
  }
});

export default titleView;
