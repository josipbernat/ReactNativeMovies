import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  defaultBackground,
  defaultPadding,
  styles as detailStyles
} from "./DetailStyling";
import TrailerRow from "../../FlatListRows/TrailerRow";
import CardSeparator from "./CardSeparator";

const trailersView = props => {
  renderSeparator = () => {
    return (
      <View
        style={{
          width: defaultPadding,
          backgroundColor: defaultBackground
        }}
      />
    );
  };

  trailersCount = props => {
    return props.items === undefined ? 0 : props.items.length;
  };

  return (
    <View style={styles.container}>
      <Text style={detailStyles.title}>
        Trailers ({this.trailersCount(props)})
      </Text>
      <FlatList
        style={styles.list}
        data={props.items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.itemSelected(item)}>
            <TrailerRow item={item} />
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View
            style={{
              width: defaultPadding,
              backgroundColor: defaultBackground
            }}
          />
        }
        ListHeaderComponent={
          <View
            style={{
              width: defaultPadding,
              backgroundColor: defaultBackground
            }}
          />
        }
        ItemSeparatorComponent={this.renderSeparator}
      />
      <CardSeparator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: defaultBackground,
    width: "100%"
  },
  list: {
    width: "100%",
    marginTop: 8
  }
});

export default trailersView;
