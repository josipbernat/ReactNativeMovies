import React from "react";
import { StyleSheet, View, ImageBackground, Image, ScrollView } from 'react-native';
import * as Constants from '../Constants/Constants'
import { LoadingView } from '../Views/LoadingView'
import { DetailInfoView } from '../Views/DetailInfoView'
import { CastListView } from "../Views/CastListView";
import { TrailersListView } from "../Views/TrailersListView";
import { FactsView } from "../Views/FactsView";


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
      isLoadingData: true,
      details: [],
      isLoadingCast: true,
      cast: [],
      isLoadingTrailers: true,
      trailers: []
    };
  }

  getMovieDetails = () => {
    this.setState((previous) => ({
      isLoadingData: true
    }));

    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    let path = Constants.API_PATH('movie/' + item.id)
    return fetch(path)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState((previous) => ({
          isLoadingData: false,
          itemDetails: responseJson,
        }));
        return true;
      })
      .catch((error) => {
        console.error(error);
        this.setState((previous) => ({
          isLoadingData: false,
          itemDetails: {},
        }));
        return false
      });
  }

  getCastDetails = () => {
    this.setState((previous) => ({
      isLoadingCast: true
    }));

    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    let creditsPath = Constants.API_PATH('movie/' + item.id + '/credits')
    return fetch(creditsPath)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState((previous) => ({
          isLoadingCast: false,
          cast: responseJson,
        }));
        return true;
      })
      .catch((error) => {
        console.error(error);
        this.setState((previous) => ({
          isLoadingCast: false,
          cast: {},
        }));
        return false
      });
  }

  getTrailers = () => {
    this.setState((previous) => ({
      isLoadingTrailers: true
    }));

    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    let trailersPath = Constants.API_PATH('movie/' + item.id + '/videos')
    return fetch(trailersPath)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState((previous) => ({
          isLoadingTrailers: false,
          trailers: responseJson,
        }));
        return true;
      })
      .catch((error) => {
        console.error(error);
        this.setState((previous) => ({
          isLoadingTrailers: false,
          trailers: {},
        }));
        return false
      });
  }

  componentDidMount() {
    return this.getMovieDetails().then(details => {
      return this.getCastDetails().then(cast => {
        return this.getTrailers().then(trailers => {

        })
          .catch(e => {
          })
      })
      .catch(e => {
      })
    })
    .catch(e => {
    })
  }

  // I moved this to separate function because console.log crashes render function
  handleCastSelect = (item) => {

  }

  handleTrailerSelect = (item) => {

  }

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.backdrop_path) }} style={styles.backdrop}>
            <Image style={styles.poster} source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.poster_path)}}/>
          </ImageBackground>

          {this.state.isLoadingData && <LoadingView />}
          {!this.state.isLoadingData && <DetailInfoView item={this.state.itemDetails} />}
          <CastListView 
            items={this.state.cast.cast} 
            isLoading={this.state.isLoadingCast} 
            itemSelected={this.handleCastSelect} 
          />
          <TrailersListView
            items={this.state.trailers.results}
            isLoading={this.state.isLoadingTrailers}
            itemSelected={this.handleTrailerSelect}
          />
          <FactsView />

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