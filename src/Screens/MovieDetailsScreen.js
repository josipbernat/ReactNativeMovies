import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import * as Constants from '../Constants/Constants';
import LoadingView from '../Views/LoadingView';
import { DetailView } from '../Views/DetailView';

export class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.title
    };
  };

  // Async load details

  constructor(props) {
    super(props);

    this.state = {
      isLoadingData: true,
      details: [],
      cast: [],
      trailers: []
    };
  }

  loadDetails = async () => {
    this.setState({
      isLoadingData: true
    });

    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    let urls = [
      Constants.API_PATH('movie/' + item.id),
      Constants.API_PATH('movie/' + item.id + '/credits'),
      Constants.API_PATH('movie/' + item.id + '/videos')
    ];

    let promises = urls.map(url => {
      return fetch(url)
        .then(response => response.json())
        .then(responseJson => Promise.resolve(responseJson))
        .catch(e => Promise.reject(new Error(e)));
    });

    Promise.all(promises)
      .then(values => {
        this.setState({
          isLoadingData: false,
          itemDetails: values[0],
          cast: values[1],
          trailers: values[2]
        });
      })
      .catch(e => {
        this.setState({
          isLoadingData: false,
          loadingError: e
        });
      });
  };

  componentDidMount() {
    this.loadDetails();
  }

  // I moved this to separate function because console.log crashes render function
  handleCastSelect = item => {};

  handleTrailerSelect = item => {};

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    const item = this.props.navigation.getParam('item', 'NO-ITEM');
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.backdrop_path) }}
            style={styles.backdrop}
          >
            <Image
              style={styles.poster}
              source={{ uri: Constants.IMAGE_BACKDROP_PATH(item.poster_path) }}
            />
          </ImageBackground>

          {this.state.isLoadingData && <LoadingView />}
          {!this.state.isLoadingData && (
            <DetailView
              item={this.state.itemDetails}
              cast={this.state.cast.cast}
              castSelectedHandler={this.handleCastSelect}
              trailers={this.state.trailers.results}
              trailerSelectedHandler={this.handleTrailerSelect}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  backdrop: {
    height: 200,
    width: '100%',
    justifyContent: 'flex-end'
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
