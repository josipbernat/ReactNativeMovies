import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { defaultBackground } from '../Views/DetailViews/DetailStyling';
import FavoriteRow from '../FlatListRows/FavoriteRow';

const favoritesListView = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={props.items}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => props.itemSelected(item)}>
            <FavoriteRow
              item={item}
              isLeft={index % 2 == 0}
              addTopPadding={index < 2}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultBackground,
    flex: 1
  }
});

export default favoritesListView;
