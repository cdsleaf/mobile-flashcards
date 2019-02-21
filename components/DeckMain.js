import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Decks extends Component {
  render() {
    const { deckId } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Deck Main! {deckId}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'AddCard',
          { entryId: deckId }
        )}>
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Decks;
