import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextButton from './TextButton';

class AddCard extends Component {

  Submit = () => {
  }

  render() {
    const { deckId } = this.props.navigation.state.params;
    return (
      <View>
        <Text>add card {deckId}</Text>
        <TextButton 
          name={'Submit'} 
          onPress={this.Submit} 
          style={{margin: 20}} />
      </View>
    )
  }
}

export default AddCard;