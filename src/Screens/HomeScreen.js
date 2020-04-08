import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoadingView from '../Views/LoadingView';
import {MoviesListView} from '../Views/MoviesListView';
import * as Constants from '../Constants/Constants.js';
import {defaultBackground} from '../Views/DetailViews/DetailStyling';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      page: 0,
    };
  }

  getMoviesFromApiAsync = page => {
    //let path = Constants.API_PATH("trending/movie/week");
    let path = Constants.API_PATH('discover/movie/');
    let sortBy = 'popularity.desc';
    // I'm not sure why ${page} isn't working. Probbably because of babbel
    let attributes =
      '&language=en-US&sort_by=' +
      sortBy +
      '&include_adult=false&include_video=true&page=' +
      page;
    path += attributes;

    return fetch(path)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.results;
      })
      .catch(error => {
        console.error(error);
      });
  };

  removeLoadMoreFromData = data => {
    if (data.length == 0) {
      return data;
    } else {
      if (data[data.length - 1].id.toString() == 'load_more') {
        data.splice(data.length - 1, 1);
      }
      return data;
    }
  };

  loadMovies() {
    if (this.state.isLoading === true) {
      return;
    }

    this.setState(
      previousState => ({
        ...previousState,
        isLoading: true,
        loadingError: null,
      }),
      () => {
        let page = this.state.page + 1;
        return this.getMoviesFromApiAsync(page)
          .then(movies => {
            this.setState(previousState => ({
              isLoading: false,
              data: [
                ...this.removeLoadMoreFromData(previousState.data),
                ...movies,
                {id: 'load_more'},
              ],
              page: page,
            }));
          })
          .catch(e => {
            console.error(error);
            this.setState(previousState => ({
              ...previousState,
              isLoading: false,
              loadingError: e,
            }));
          });
      },
    );
  }

  componentDidMount() {
    return this.loadMovies();
  }

  // I moved this to separate function because console.log crashes render function
  handleMovieSelect = item => {
    this.props.navigation.navigate('MovieDetails', {
      item: item,
    });
  };

  loadMoreHandler = () => {
    this.loadMovies();
  };

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    let showLoading = this.state.isLoading === true && this.state.page == 0;

    return (
      <View style={styles.container}>
        {showLoading ? (
          <LoadingView />
        ) : (
          <MoviesListView
            data={this.state.data}
            itemSelected={this.handleMovieSelect}
            showLoadMore={true}
            loadMoreHandler={this.loadMoreHandler}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: defaultBackground,
  },
});
