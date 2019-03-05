import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { addNewDeck } from '../actions';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { black, white, gray } from '../utils/colors'

class AddEntry extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
    }
  }

  submit = () => {
    if(this.state.title === ''){
      alert("Title input is an empty!");
      return;
    }

    this.props.dispatch(addNewDeck(this.state.title));

    this.props.navigation.navigate(
      'DeckMain',
      { 
        deckId: this.state.title,
        title: this.state.title
      }
    )

    this.setState(state => ({
      title: ''
    }));
  }

  render() {
    return (
      <View style={styles.addDeck}>
        <Text style={styles.addDeckQuestion}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.newDeckTitleinput}
          onChangeText={(title) => this.setState({title})}
          placeholder='Deck Title'
          value={this.state.title}
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
  addDeck: {
    flex: 1,
    padding: 30
  },
  addDeckQuestion: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  newDeckTitleinput: {
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

export default connect()(AddEntry);
