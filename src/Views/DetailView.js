import React from "react";
import { View, StyleSheet, Linking, Alert } from "react-native";
import TitleView from "./DetailViews/TitleView";
import DescriptionView from "./DetailViews/DescriptionView";
import RatingView from "./DetailViews/RatingView";
import CastView from "./DetailViews/CastView";
import TrailersView from "./DetailViews/TrailersView";
import FactsView from "./DetailViews/FactsView";
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

  factsUrlHandler = url => {
    Alert.alert("", "Do you want to open this web page in browser?", [
      {
        text: "Open",
        onPress: () => {
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          });
        }
      },
      { text: "Cancel", style: "cancel" }
    ]);
  };

  trailerSelectedHandler = trailer => {
    console.log(trailer);
    let url = "https://www.youtube.com/watch?v=" + trailer.key;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  castSelectedHandler = cast => {
    console.log(cast);
  };

  return (
    <View style={styles.container}>
      <TitleView item={props.item} />
      <RatingView item={props.item} />
      <DescriptionView item={props.item} />
      <CastView items={props.cast} itemSelected={this.castSelectedHandler} />
      <FactsView item={props.item} urlSelectedHandler={this.factsUrlHandler} />
      <TrailersView
        items={props.trailers}
        itemSelected={this.trailerSelectedHandler}
      />
    </View>
  );
};

export default detailView;
