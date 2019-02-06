import React, {Component} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import MovieRow from '../Components/MovieRow'

export class DataListView extends Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: 64
        }}
      />
    );
  };

	render() {
    return (
      <FlatList style={styles.container}
        data={this.props.data} 
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => 
          
          <TouchableOpacity onPress={() => this.props.itemSelected(item)} >
            <MovieRow item={item} />
          </TouchableOpacity>
        }
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  item: {
    height: 44,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  itemText: {
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 16,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});