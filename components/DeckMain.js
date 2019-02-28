import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';

class Decks extends Component {
  render() {
    const { deckId } = this.props.navigation.state.params;
    return (
      <View>
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.cardsCount}>{item.questions.length} cards</Text>
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

const styles = StyleSheet.create({
  deckTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardsCount: {
    textAlign: 'center',
    fontSize: 15,
  }
})

export default connect()(Decks);
