import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import TitleView from "./DetailViews/TitleView";
import DescriptionView from "./DetailViews/DescriptionView";
import FactsView from "./DetailViews/FactsView";
import CastView from "./DetailViews/CastView";
import TrailersView from "./DetailViews/TrailersView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white"
  }
});

export class DetailView extends Component {
  onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TitleView item={this.props.item} />
        <FactsView item={this.props.item} />
        <DescriptionView item={this.props.item} />
        <CastView items={this.props.cast} />
        <TrailersView items={this.props.trailers} />
      </View>
    );
  }
}
