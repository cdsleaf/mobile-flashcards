import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { addNewDeck } from '../actions';
import TextButton from './TextButton';

class AddEntry extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
    }
  }

  Submit = () => {
    if(this.state.title === ''){
      alert("Title input is an empty!");
      return;
    }

    addNewDeck(this.state.title);
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TextButton 
          name={'Submit'} 
          onPress={this.Submit} 
          style={{margin: 20}} />
      </View>
    )
  }
}

export default AddEntry;
