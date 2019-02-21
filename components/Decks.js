import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

class Decks extends Component {
  render() {
    return (
      <FlatList
        data={[{key: 'Deck_A'}, {key: 'Deck_B'}]}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'DeckMain',
            { deckId: item.key, title: item.key }
          )}>
          <Text>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    )
  }
}

export default Decks;
