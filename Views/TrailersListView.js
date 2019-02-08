import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native';
import TrailerRow from '../Components/TrailerRow'
import * as GlobalStyle from "../Constants/GlobalStyle";

export class TrailersListView extends Component {

  render() {

    const showNoItems = this.props.isLoading == false && this.props.items.length == 0
    const showList = this.props.isLoading == false && this.props.items.length > 0
    // https://stackoverflow.com/questions/53222081/spacing-before-and-after-a-horizontal-flatlist-react-native
    // Add fotter to have spacing at the right end
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Trailers
        </Text>
        {this.props.isLoading && <Text style={styles.subtitle}>Loading trailers...</Text>}
        {showNoItems && <Text style={styles.subtitle}>Trailers unavailable...</Text>}
        {showList &&
          <FlatList style={styles.list}
            data={this.props.items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) =>

              <TouchableOpacity onPress={() => this.props.itemSelected(item)} >
                <TrailerRow item={item} />
              </TouchableOpacity>
            }
            ListFooterComponent={<View style={{ width: 16 }}></View>}
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
    width: '100%'
  },
  list: {
    width: '100%',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8
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
    marginBottom: 16,
  },
});