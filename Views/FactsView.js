import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as GlobalStyle from "../Constants/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    flexDirection: 'column',
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
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  itemTitle: {
    color: '#515151',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
  },
  itemSubtitle: {
    fontSize: 15,
    color: '#515151',
    textAlign: 'right',
  }
});

export class FactsView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Facts
        </Text>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Budget</Text>
          <Text style={styles.itemSubtitle}>$52.000.000</Text>
        </View>
      </View>
    );
  }
}

