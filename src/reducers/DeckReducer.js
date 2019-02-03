import {
  LOADING,
  OPEN_DECK,
  SAVING_DECK,
  CLEAR_STORAGE,
  ERROR_GETTING_DECK,
  SUCCESS_GETTING_DECK,
} from '../types';

const INITIAL_STATE = {
  decks: {},
  error: false,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case OPEN_DECK:
      return { ...state, loading: false, deck: action.payload }
    case SAVING_DECK:
      return { ...state, decks: action.payload }
    case SUCCESS_GETTING_DECK:
      return { ...state, loading: false, error: false, decks: action.payload }
    case ERROR_GETTING_DECK:
      return { ...state, loading: false, error: true }
    case CLEAR_STORAGE:
      return { ...state, loading: false, decks: {} }
    default:
      return state;
  }
};