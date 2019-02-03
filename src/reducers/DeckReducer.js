import {
  GETTING_DECK,
  SAVING_DECK,
  ERROR_GETTING_DECK,
  SUCCESS_GETTING_DECK,
} from '../types';

const INITIAL_STATE = {
  decks: [],
  loading: false,
  error: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVING_DECK:
      return { ...state, decks: [...state.decks, action.payload] }
    case GETTING_DECK:
        return { ...state, loading: true }
    case SUCCESS_GETTING_DECK:
        return { ...state, loading: false, decks: [...action.payload] }
    case ERROR_GETTING_DECK:
        return { ...state, loading: false }
    default:
        return state;
  }
};