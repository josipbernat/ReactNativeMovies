import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import MovieRow from '../FlatListRows/MovieRow';
import {defaultBackground} from './DetailViews/DetailStyling';
import LoadMoreRow from '../FlatListRows/LoadMoreRow';

import * as Constants from '../Constants/Constants.js';

export class MoviesListView extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          marginLeft: 64,
        }}
      />
    );
  };

  CreateRow = item => {
    // I tried using TouchableNativeFeedback
    // but I didn't get ripple effect. So for now I'll still use TouchableOpacity

    // <TouchableNativeFeedback
    //   onPress={this.props.itemSelected(item.item)}
    // background={
    //   Platform.Version >= 21
    //     ? TouchableNativeFeedback.Ripple("rgba(0,0,0,.2)", true)
    //     : TouchableNativeFeedback.SelectableBackground()
    // }
    // >
    //   <MovieRow item={item.item} />
    // </TouchableNativeFeedback>

    if (item.item.id.toString() == 'load_more') {
      return <LoadMoreRow />;
    } else {
      return (
        <TouchableOpacity onPress={() => this.props.itemSelected(item.item)}>
          <MovieRow item={item.item} />
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => <this.CreateRow item={item} />}
        ItemSeparatorComponent={this.renderSeparator}
        onEndReached={this.props.loadMoreHandler}
        onEndReachedThreshold={0.2}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultBackground,
    flex: 1,
  },
});
