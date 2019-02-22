import React from "react";
import { StyleSheet, View } from "react-native";
import LoadingView from "../Views/LoadingView";
import { MoviesListView } from "../Views/MoviesListView";
import * as Constants from "../Constants/Constants.js";
import { defaultBackground } from "../Views/DetailViews/DetailStyling";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: []
    };
  }

  getMoviesFromApiAsync = () => {
    let path = Constants.API_PATH("trending/movie/week");
    return fetch(path)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.results;
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    return this.getMoviesFromApiAsync()
      .then(movies => {
        this.setState(previousState => ({
          isLoading: false,
          data: movies
        }));
      })
      .catch(e => {
        console.error(error);
      });
  }

  // I moved this to separate function because console.log crashes render function
  handleMovieSelect = item => {
    this.props.navigation.navigate("MovieDetails", {
      item: item
    });
  };

  // https://reactjs.org/docs/conditional-rendering.html
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <LoadingView />
        ) : (
          <MoviesListView
            data={this.state.data}
            itemSelected={this.handleMovieSelect}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: defaultBackground
  }
});
