import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handlInitialData } from '../actions';

class Decks extends Component {

  componentDidMount(){
    this.props.dispatch(handlInitialData());
  }

  render() {
    return (
      <FlatList
        data={this.props.decks}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate(
              'DeckMain',
              { 
                deckId: item.title,
                title: item.title
              }
            )}
          >
            <View style={styles.deck}>
              <Text style={styles.deckTitle}>{item.title}</Text>
              <Text style={styles.cardsCount}>{item.questions.length} cards</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    borderWidth: 0.5,
    padding: 30
  },
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

function mapStateToProps(decks){
  return {
    decks: Object.values(decks),
  }
}

export default connect(mapStateToProps)(Decks);
