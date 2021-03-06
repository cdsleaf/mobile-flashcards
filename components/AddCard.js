import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions }from 'react-navigation';
import { addNewCardToDeck } from '../actions';
import TextButton from './TextButton';
import { black, white, gray } from '../utils/colors'

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
  }

  submit = () => {

    if(this.state.question === ''){
      alert("Question input is an empty!");
      return;
    }

    if(this.state.answer === ''){
      alert("Answer input is an empty!");
      return;
    }

    this.props.dispatch(addNewCardToDeck(this.props.deckId, this.state));

    this.setState({
      question: '',
      answer: '',
    });

    this.toDeckMain();
  }

  handleChangeQuestion = (question) => {
    this.setState({question})
  }

  handleChangeAnswer = (answer) => {
    this.setState({answer})
  }

  toDeckMain = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.newCardInfo}
          onChangeText={this.handleChangeQuestion}
          placeholder='question'
          value={this.state.question}
        />
        <TextInput
          style={styles.newCardInfo}
          onChangeText={this.handleChangeAnswer}
          placeholder='answer'
          value={this.state.answer}
        />
        <TextButton 
          name={'Submit'} 
          onPress={this.submit} 
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonText} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newCardInfo: {
    height: 40, 
    borderColor: gray, 
    borderWidth: 1,
    padding: 10,
    margin: 20,
  },
  submitButton: {
    width: 150,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    deckId,
  }
}

export default connect(mapStateToProps)(AddCard);