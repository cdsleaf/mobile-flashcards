import { 
  RECEIVE_DECKS,
  ADD_NEW_DECK,
  ADD_NEW_CARD,
  REMOVE_DECK,
} from '../actions/index';

export default function decks (state={}, action) {
  switch(action.type){
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      };
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            action.newCard,
          ]
        }
      }
    case REMOVE_DECK:
      return Object.keys(state)
        .filter(key => key !== action.deckId)
        .reduce((obj, key) => {
          obj[key] = state[key];
          return obj;
        }, {});
    default: 
      return state;
  }
}
