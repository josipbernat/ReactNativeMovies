import React, { Component } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import MovieRow from "../FlatListRows/MovieRow";
import { defaultBackground } from "./DetailViews/DetailStyling";

export class MoviesListView extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: 64
        }}
      />
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.itemSelected(item)}>
            <MovieRow item={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultBackground,
    flex: 1
  }
});
