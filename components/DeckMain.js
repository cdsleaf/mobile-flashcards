import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Decks extends Component {
  render() {
    const { deckId } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Deck Main! {deckId}</Text>
      </View>
    )
  }
}

export default Decks;
