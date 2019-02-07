import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as GlobalStyle from "../Constants/GlobalStyle";

export class DetailDescriptionView extends Component {

  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  title: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232323',
    textAlign: 'left',
  },
  subtitle: {
    marginLeft: 16,
    marginTop: 2,
    fontSize: 14,
    color: '#232323',
    textAlign: 'left',
    marginBottom: 16
  }
});