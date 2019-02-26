import { 
  RECEIVE_DECKS,
  ADD_NEW_DECK
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
        [action.deck.title]: {
          title: deck.title,
          questions: [],
        },
      };
    default: 
      return state;
  }
}
