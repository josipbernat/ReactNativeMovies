import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native';
import CastRow from "../FlatListRows/CastRow";
import * as GlobalStyle from "../Constants/GlobalStyle";

export class CastListView extends Component {

  render() {

    const showNoItems = this.props.isLoading == false && this.props.items.length == 0
    const showList = this.props.isLoading == false && this.props.items.length > 0
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Cast
        </Text>
        {this.props.isLoading && <Text style={styles.subtitle}>Loading cast...</Text>}
        {showNoItems && <Text style={styles.subtitle}>Cast unavailable...</Text>}
        {showList && 
          <FlatList style={styles.list}
            data={this.props.items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.cast_id.toString()}
            renderItem={({ item }) =>

              <TouchableOpacity onPress={() => this.props.itemSelected(item)} >
                <CastRow item={item} />
              </TouchableOpacity>
            }
          />
        }
        <View style={GlobalStyle.styles.cardSeparator} />
        <View style={GlobalStyle.styles.cardSeparatorLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  list: {
    width: '100%',
    paddingTop: 8
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232323',
    textAlign: 'left',
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: '#515151',
    textAlign: 'left',
    marginBottom: 16,
  },
});