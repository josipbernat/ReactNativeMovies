import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Moment from 'moment';
import * as GlobalStyle from "../Constants/GlobalStyle";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  title: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232323',
    textAlign: 'left',
  },
  subtitle: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 2,
    fontSize: 14,
    color: '#515151',
    textAlign: 'left',
    marginBottom: 16
  },
  scoreAndBookmarkContainer: {
    height: 100,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreAndBookmarkItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  scoreAndBookmarkText: {
    marginTop: 8,
    fontSize: 14,
    color: '#515151',
    textAlign: 'center',
  },
  points: {
    fontSize: 14,
    color: '#515151',
    textAlign: 'center',
  },
  favoriteButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    width: 44,
    height: 44
  }
});

export class DetailInfoView extends Component {

  getSubtitle = () => {
    Moment.locale('en');

    var genreNames = this.props.item.genres.flatMap(e => e.name)
    var text = genreNames.join(', ')
    text += ' · ' + this.props.item.runtime + ' min'
    text += ' · ' + Moment(this.props.item.release_date).format('MMM Do YYYY')
    return text
  }

  onPress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.item.title}
        </Text>
        <Text style={styles.subtitle}>
          {this.getSubtitle()}
        </Text>
        <View style={GlobalStyle.styles.cardSeparator} />
        <View style={GlobalStyle.styles.cardSeparatorLine} />
        
        <View style={{ height: 116 }}>
          <View style={styles.scoreAndBookmarkContainer}>
            <View style={styles.scoreAndBookmarkItem}>
              <AnimatedCircularProgress
                size={60}
                width={7}
                rotation={0}
                fill={this.props.item.vote_average * 10}
                tintColor="#30CE7D"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875">
                {(fill) => (
                  <Text style={styles.points}>
                    {this.props.item.vote_average * 10}%
                  </Text>
                )}
              </AnimatedCircularProgress>
              <Text style={styles.scoreAndBookmarkText}>User Score</Text>
            </View>
            <View style={styles.scoreAndBookmarkItem}>
              <TouchableHighlight onPress={this._onPressButton}>
                <Image
                  style={styles.favoriteButton}
                  source={require('../Images/add_as_favorite.png')}
                />
              </TouchableHighlight>
              <Text style={styles.scoreAndBookmarkText}>Add to favorites</Text>
            </View>
          </View>
        </View>
        <View style={GlobalStyle.styles.cardSeparator} />
        <View style={GlobalStyle.styles.cardSeparatorLine} />
       
        <Text style={styles.title}>
          Description
        </Text>
        <Text style={styles.subtitle}>
          {this.props.item.overview}
        </Text>
        <View style={GlobalStyle.styles.cardSeparator} />
        <View style={GlobalStyle.styles.cardSeparatorLine} />
      </View>
    );
  }
}

