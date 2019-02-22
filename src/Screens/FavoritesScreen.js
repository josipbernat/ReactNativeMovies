import React from "react";
import { StyleSheet, View } from 'react-native';

export class FavoritesScreen extends React.Component {

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});