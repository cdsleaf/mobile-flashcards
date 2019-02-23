import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextButton from './TextButton';

class Decks extends Component {
  render() {
    const { deckId } = this.props.navigation.state.params;
    return (
      <View>
        <Text>Deck Main! {deckId}</Text>
        <TextButton 
          name={'Add Card'} 
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { entryId: deckId }
          )} 
          style={{margin: 20}} />
        <TextButton 
          name={'Start Quiz'} 
          style={{margin: 20}} />
        <TextButton 
          name={'Delete Deck'} 
          style={{margin: 20}} />
      </View>
    )
  }
}

export default Decks;
