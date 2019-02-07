import React from "react";
import { StyleSheet, View, ImageBackground, Image, ScrollView } from 'react-native';
import * as Constants from '../Constants/Constants'
import { LoadingView } from '../Views/LoadingView'
import { DetailInfoView } from '../Views/DetailInfoView'
import { DetailDescriptionView } from "../Views/DetailDescriptionView";

export class MovieDetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title,
    };
  };

  // Async load details

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      details: []
    };
  }

  getMovieDetails = () => {

    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    let path = Constants.API_PATH('movie/' + item.id)
    return fetch(path)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    return this.getMovieDetails().then(details => {
      this.setState(previousState => (
        {
          isLoading: false,
          details: details
        }
      ))
    })
    .catch(e => {
      console.error(error);
    })
  }

  bottomView = () => {
    if (this.state.isLoading) {
      return (<LoadingView />)
    }
    else {
      return (
          <DetailInfoView item={this.state.details} />
      )
    }
  }

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    console.log(this.state.details)
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.backdrop_path) }} style={styles.backdrop}>
            <Image style={styles.poster} source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.poster_path)}}/>
          </ImageBackground>
          {this.bottomView()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
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