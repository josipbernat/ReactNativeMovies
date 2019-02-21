import React from "react";
import { View, StyleSheet } from "react-native";
import TitleView from "./DetailViews/TitleView";
import DescriptionView from "./DetailViews/DescriptionView";
import FactsView from "./DetailViews/FactsView";
import CastView from "./DetailViews/CastView";
import TrailersView from "./DetailViews/TrailersView";
import { defaultBackground, defaultPadding } from "./DetailViews/DetailStyling";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: defaultPadding,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: defaultBackground
  }
});

const detailView = props => {
  onPress = () => {};

  return (
    <View style={styles.container}>
      <TitleView item={props.item} />
      <FactsView item={props.item} />
      <DescriptionView item={props.item} />
      <CastView items={props.cast} />
      <TrailersView items={props.trailers} />
    </View>
  );
};

export default detailView;
