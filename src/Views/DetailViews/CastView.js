import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { defaultBackground, styles as detailStyles } from "./DetailStyling";
import CastRow from "../../FlatListRows/CastRow";
import CardSeparator from "./CardSeparator";

const castView = props => {
  return (
    <View style={styles.container}>
      <Text style={detailStyles.title}>Cast</Text>
      <FlatList
        style={styles.list}
        data={props.items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.cast_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.itemSelected(item)}>
            <CastRow item={item} />
          </TouchableOpacity>
        )}
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

export default castView;
