import React from "react";
import { StyleSheet, View, ImageBackground } from 'react-native';
import * as Constants from '../Constants/Constants.js'

export class MovieDetailsScreen extends React.Component {

  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title,
    };
  };

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    const item = this.props.navigation.getParam('item', 'NO-ITEM');

    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.backdrop_path) }} style={styles.backdrop}>
          <View style={styles.poster}></View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  backdrop: {
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',
  },
  poster: {
    backgroundColor: '#FFFFFF', 
    height: 120, 
    width: 120 / 1.5,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginBottom: -20
  }
});