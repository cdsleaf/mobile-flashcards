import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions }from 'react-navigation';
import { deleteDeck } from '../actions';
import TextButton from './TextButton';
import { black, white } from '../utils/colors'

const Decks = (props) => {

  const { deckId, deck, navigation, dispatch } = props;

  const handleDeleteDeck = () => {
    dispatch(deleteDeck(deckId));
    toHome();
  }

  const toHome = () => {
    navigation.dispatch(NavigationActions.back());
  }

  return (
    <View>
      <View style={styles.deckInfo}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.cardsCount}>{deck.questions.length} cards</Text>
      </View>  
      <TextButton 
        name={'Add Card'} 
        onPress={() => navigation.navigate(
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
        onPress={handleDeleteDeck} 
        buttonStyle={styles.submitButton}
        textStyle={styles.submitButtonText}  
        />
    </View>
  )
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
    deck: decks[deckId] === undefined 
      ? {title: '', questions: []} 
      : decks[deckId],
  }
}

export default connect(mapStateToProps)(Decks);
