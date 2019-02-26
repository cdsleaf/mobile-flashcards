import { AsyncStorage } from 'react-native';

const CALENDAR_STORAGE_KEY = 'mobileFlashCards:Decks';

export function fetchDecksResult() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
}

export function submitDeck( deck, deckId ) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [deckId]: deck,
  }))
}

export function removeDeck(deckId) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[deckId] = undefined;
      delete data[deckId];
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
    });
}