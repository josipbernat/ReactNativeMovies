import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { fetchMovies } from '../Storage/favorites';
import { defaultBackground } from '../Views/DetailViews/DetailStyling';
import FavoritesListView from '../Views/FavoritesListView';
import LoadingView from '../Views/LoadingView';

export class FavoritesScreen extends React.Component {
  // https://reactjs.org/docs/conditional-rendering.html

  static navigationOptions = {
    title: 'Favorites'
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false
    };
  }

  reloadFavorites = () => {
    this.setState(
      previousState => ({
        ...previousState,
        isLoading: true
      }),
      () => {
        fetchMovies()
          .then(items => {
            this.setState({
              isLoading: false,
              items: items
            });
          })
          .catch(e => {
            this.setState({
              isLoading: false,
              loadingError: e,
              items: []
            });
          });
      }
    );
  };

  handleMovieSelect = item => {
    this.props.navigation.navigate('MovieDetails', {
      item: item
    });
  };

  render() {
    let label = null;
    if (this.state.items === null || this.state.items.length === 0) {
      label = <Text style={styles.label}> You have no favorites </Text>;
    }

    let list = null;
    if (this.state.items !== null && this.state.items.length !== 0) {
      list = (
        <FavoritesListView
          items={this.state.items}
          itemSelected={this.handleMovieSelect}
        />
      );
    }

    let loading = null;
    if (this.state.isLoading === true) {
      loading = <LoadingView />;
    }

    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={payload => this.reloadFavorites()} />
        {label}
        {list}
        {loading}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultBackground
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
    backgroundColor: defaultBackground
  }
});
