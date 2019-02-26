import {
  fetchDecksResult,
  submitDeck,
} from './api';

export function getDecks(){
  return fetchDecksResult();
};

export function getDeck(deckId){
  return fetchDecksResult().then(decks => decks[deckId]);
};

export function addDeck(title){
  const newDeck = {
    deckId: title,
    deck: {
      title,
      questions: [],
    }
  }
  return submitDeck(newDeck, title);
};

export function addCardToDeck(deckId, newCard){
  let deck = getDeck(deckId);
  deck['questions'] = [ ...deck['questions'], newCard];
  return submitDeck(deck, deckId);
};