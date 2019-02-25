import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import * as Constants from '../Constants/Constants.js';
import {
  defaultPadding,
  defaultBackground
} from '../Views/DetailViews/DetailStyling';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: defaultBackground,
    width: width / 2
  },
  containerLeft: {
    paddingLeft: defaultPadding,
    paddingRight: defaultPadding / 2
  },
  containerRight: {
    paddingLeft: defaultPadding / 2,
    paddingRight: defaultPadding
  },
  containerTop: {
    paddingTop: defaultPadding
  },
  text: {
    marginTop: 4,
    marginBottom: defaultPadding,
    fontSize: 14,
    backgroundColor: defaultBackground
  },
  photo: {
    aspectRatio: 0.667,
    width: '100%',
    backgroundColor: 'gray'
  }
});

const favoriteRow = props => (
  <View
    style={[
      styles.container,
      props.isLeft ? styles.containerLeft : styles.containerRight,
      props.addTopPadding ? styles.containerTop : {}
    ]}
  >
    <Image
      source={{
        uri: Constants.IMAGE_POSTER_PATH(props.item.poster_path, true)
      }}
      style={styles.photo}
    />
    <Text style={styles.text} numberOfLines={2}>
      {props.item.title}
    </Text>
  </View>
);

export default favoriteRow;
