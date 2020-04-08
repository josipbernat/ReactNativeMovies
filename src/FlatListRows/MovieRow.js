import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Constants from '../Constants/Constants.js';
import {
  defaultBackground,
  defaultPadding,
} from '../Views/DetailViews/DetailStyling';

const styles = StyleSheet.create({
  container: {
    paddingTop: defaultPadding / 2,
    paddingBottom: defaultPadding / 2,
    paddingLeft: defaultPadding,
    paddingRight: defaultPadding,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: defaultBackground,
  },
  text: {
    marginLeft: defaultPadding,
    marginRight: defaultPadding,
    fontSize: 16,
  },
  photo: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});

const movieRow = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: Constants.IMAGE_POSTER_PATH(props.item.poster_path)}}
        style={styles.photo}
      />
      <Text style={styles.text} numberOfLines={2}>
        {props.item.title}
      </Text>
    </View>
  );
};

export default movieRow;
