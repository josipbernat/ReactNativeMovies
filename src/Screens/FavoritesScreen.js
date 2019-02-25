import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export class FavoritesScreen extends React.Component {
  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={payload => this.setState({ reload: 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});
