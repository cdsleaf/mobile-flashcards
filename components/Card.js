import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions }from 'react-navigation';
import TextButton from './TextButton';
import { black, white, gray, red } from '../utils/colors'

const FRONT_BUTTON = 'Answer';
const BACK_BUTTON = 'Question';

class Card extends Component {

  state = {
    currentQuestionNumber: 0,
    correctCount: 0,
    flipButton: FRONT_BUTTON,
    scoreView: false,
  }

  handleFlipCard = () => {
    this.setState(state => ({
      ...state,
      flipButton: state.flipButton === FRONT_BUTTON
        ? BACK_BUTTON
        : FRONT_BUTTON,
    }));
  }
  
  handleCorrectButton = (chose) => {

    if(this.state.currentQuestionNumber === this.props.deck.questions.length-1){
      this.setState(state => ({
        ...state,
        correctCount: chose ? state.correctCount+1 : state.correctCount,
        scoreView: true,
      }));
    }else{
      this.setState(state => ({
        ...state,
        currentQuestionNumber: state.currentQuestionNumber+1,
        correctCount: chose ? state.correctCount+1 : state.correctCount,
        flipButton: FRONT_BUTTON,
      }));
    }
  }

  handleStartQuizOver = () => {
    this.setState({
      currentQuestionNumber: 0,
      correctCount: 0,
      flipButton: FRONT_BUTTON,
      scoreView: false,
    });
  }

  render() {

    const { questions } = this.props.deck;

    if(questions.length === 0) {
      return (
        <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={styles.noCardsMessage}>
              Sorry, you cannot take a quiz because there are no cards in the deck.
          </Text>
        </View>
      )
    }

    if(this.state.scoreView) {
      return (
        <View>
          <Text style={styles.scoreText}>
            Your Score is {this.state.correctCount} / {questions.length}
          </Text>
          <TextButton 
            name={'Start over'} 
            onPress={this.handleStartQuizOver} 
            buttonStyle={styles.submitButton}
            textStyle={styles.submitButtonText} 
          />
          <TextButton 
            name={'Go back to Deck'} 
            onPress={() => {
              this.props.navigation.dispatch(NavigationActions.back());
            }} 
            buttonStyle={styles.submitButton}
            textStyle={styles.submitButtonText} 
          />   
        </View>
      )
    }

    return (
      <View>
        <Text style={styles.currentPageCount}>
          {this.state.currentQuestionNumber+1} / {questions.length}
        </Text>
        <View style={styles.questionView}>
          <Text style={styles.questionContents}>
            {this.state.flipButton === FRONT_BUTTON 
              ? questions[this.state.currentQuestionNumber].question
              : questions[this.state.currentQuestionNumber].answer
            }
          </Text>
          <TextButton 
            name={this.state.flipButton}
            onPress={this.handleFlipCard} 
            textStyle={styles.flipButtonText}
          />
        </View>
        <TextButton 
          name={'Correct'} 
          onPress={() => {this.handleCorrectButton(true)}} 
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonText} 
        />
        <TextButton 
          name={'Incorrect'} 
          onPress={() => {this.handleCorrectButton(false)}} 
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonText} 
        />
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  noCardsMessage: {
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  currentPageCount: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 20,
  },
  questionView: {
    marginTop: 70,
    marginRight: 20,
    marginBottom: 70,
    marginLeft: 20,
  },
  questionContents: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  flipButtonText: {
    marginTop: 20,
    color: red,
    fontSize: 20,
  },
  answerInput: {
    height: 40, 
    borderColor: gray, 
    borderWidth: 1,
    padding: 10,
    margin: 20,
  },
  scoreText: {
    marginTop: 70,
    marginBottom: 70,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  submitButton: {
    width: 150,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    backgroundColor: black,
    borderRadius: 5,
  },
  submitButtonText: {
    color: white,
    fontSize: 20,
  }
})

function mapStateToProps(decks, props){
  const { deckId } = props.navigation.state.params;
  return {
    deck: decks[deckId],
  }
}

export default connect(mapStateToProps)(Card);
