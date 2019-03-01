import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { black, white } from '../utils/colors'

class Decks extends Component {
  render() {
    const { deckId, deck } = this.props;
    return (
      <View>
        <View style={styles.deckInfo}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.cardsCount}>{deck.questions.length} cards</Text>
        </View>  
        <TextButton 
          name={'Add Card'} 
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deckId }
          )} 
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonText} 
        />
        <TextButton 
          name={'Start Quiz'} 
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonText} 
        />
        <TextButton 
          name={'Delete Deck'}
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonText}  
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckInfo: {
    marginTop: 80,
    marginBottom: 80,
  },
  deckTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardsCount: {
    textAlign: 'center',
    fontSize: 15,
  },
  submitButton: {
    width: 200,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: black,
    borderRadius: 5,
    marginTop: 30 
  },
  submitButtonText: {
    color: white,
    fontSize: 20,
  }
})

function mapStateToProps(decks, props) {
  const { deckId } = props.navigation.state.params;
  return {
    deckId,
    deck: decks[deckId],
  }
}

export default connect(mapStateToProps)(Decks);
