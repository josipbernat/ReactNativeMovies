import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import * as Constants from '../Constants/Constants.js'
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width * 0.33,
    height: 100,
  },
  text: {
    marginTop: 4,
    fontSize: 14,
    backgroundColor: 'white',
  },
  photo: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: 'gray',
  },
});

const castRow = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: Constants.IMAGE_PROFILE_PATH(props.item.profile_path) }} style={styles.photo} />
    <Text style={styles.text}>
      {props.item.name}
    </Text>
  </View>
);

export default castRow;