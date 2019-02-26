import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions';

class Decks extends Component {

  componentDidMount(){
    handlInitialData();
  }

  render() {
    return (
      <FlatList
        data={this.props.decks}
        renderItem={(deck) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'DeckMain',
            { title: deck.title }
          )}>
            <Text>{item.key}</Text>
            <Text>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    )
  }
}

function mapStateToProps({ decks }){console.log("2222", decks)
  return {
    decks: decks !== undefined ? Object.values(decks) : [],
  }
}

export default connect(mapStateToProps)(Decks);
