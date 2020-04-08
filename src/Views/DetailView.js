import React from 'react';
import { View, StyleSheet, Linking, Alert } from 'react-native';
import TitleView from './DetailViews/TitleView';
import DescriptionView from './DetailViews/DescriptionView';
import RatingView from './DetailViews/RatingView';
import CastView from './DetailViews/CastView';
import TrailersView from './DetailViews/TrailersView';
import FactsView from './DetailViews/FactsView';
import { defaultBackground, defaultPadding } from './DetailViews/DetailStyling';
import {
  isMovieFavorite,
  saveMovieToFavorites,
  removeMovieFromFavorites
} from '../Storage/favorites';

export class DetailView extends React.Component {
  constructor(props) {
    super(props);

    isMovieFavorite(this.props.item)
      .then(value => {
        this.setState({
          isFavorite: value
        });
      })
      .catch(e => {});
  }

  state = {
    isFavorite: false
  };

  factsUrlHandler = url => {
    Alert.alert('', 'Do you want to open this web page in browser?', [
      {
        text: 'Open',
        onPress: () => {
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          });
        }
      },
      { text: 'Cancel', style: 'cancel' }
    ]);
  };

  trailerSelectedHandler = trailer => {
    console.log(trailer);
    let url = 'https://www.youtube.com/watch?v=' + trailer.key;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  castSelectedHandler = cast => {
    console.log(cast);
  };

  favoritePressedHandler = () => {
    this.setState(
      previousState => ({
        ...previousState,
        isFavorite: !previousState.isFavorite
      }),
      () => {
        isMovieFavorite(this.props.item)
          .then(value => {
            if (value) {
              removeMovieFromFavorites(this.props.item);
            } else {
              saveMovieToFavorites(this.props.item);
            }
          })
          .catch(e => {
            this.setState(previousState => ({
              ...previousState,
              isFavorite: !previousState.isFavorite
            }));
          });
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TitleView item={this.props.item} />
        <RatingView
          item={this.props.item}
          onFavoritePress={this.favoritePressedHandler}
          isFavorite={this.state.isFavorite}
        />
        <DescriptionView item={this.props.item} />
        <CastView
          items={this.props.cast}
          itemSelected={this.castSelectedHandler}
        />
        <FactsView
          item={this.props.item}
          urlSelectedHandler={this.factsUrlHandler}
        />
        <TrailersView
          items={this.props.trailers}
          itemSelected={this.trailerSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: defaultPadding,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: defaultBackground
  }
});
