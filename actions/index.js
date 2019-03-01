import { 
  getDecks, 
  addDeck,
  addCardToDeck,
 } from '../utils/helpers';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';

export function handlInitialData(){
  return (dispatch) => {
    return getDecks().then(decks => {
      dispatch(receiveDecks(decks));
    });
  };
}

export function receiveDecks(decks){
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addNewDeck(title){
  return (dispatch) => {
    return addDeck(title).then((decks) => {
      dispatch({
        type: ADD_NEW_DECK,
        title
      })
    });
  };
}

export function addNewCardToDeck(deckId, newCard){
  return (dispatch) => {
    return addCardToDeck(deckId, newCard).then((decks) => {
      dispatch({
        type: ADD_NEW_CARD,
        deckId,
        newCard,
      })
    })
  }
}