import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CardSeparator from "./CardSeparator";
import { defaultBackground, defaultPadding } from "./DetailStyling";
import Icon from "react-native-vector-icons/AntDesign";

const ratingView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <View style={styles.item}>
          <AnimatedCircularProgress
            size={60}
            width={7}
            rotation={0}
            fill={props.item.vote_average * 10}
            tintColor="#30CE7D"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          >
            {fill => (
              <Text style={styles.points}>{props.item.vote_average * 10}%</Text>
            )}
          </AnimatedCircularProgress>
          <Text style={[styles.itemText, { marginTop: 8 }]}>User Score</Text>
        </View>
        <View style={styles.item}>
          <TouchableHighlight onPress={props.onFavoritePress}>
            <Icon name="hearto" color="" size={65} color="#21D066" />
          </TouchableHighlight>
          <Text style={[styles.itemText, { marginTop: -3 }]}>
            Add to favorites
          </Text>
        </View>
      </View>
      <CardSeparator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultBackground,
    alignItems: "center"
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    backgroundColor: defaultBackground,
    justifyContent: "space-between"
  },
  item: {
    alignItems: "center",
    backgroundColor: defaultBackground,
    margin: defaultPadding
  },
  itemText: {
    fontSize: 14,
    color: "#515151",
    textAlign: "center"
  }
});

export default ratingView;
