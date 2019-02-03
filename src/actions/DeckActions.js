import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'Flashcards:Storage';

import {
  GETTING_DECK,
  SAVING_DECK,
  ERROR_GETTING_DECK,
  SUCCESS_GETTING_DECK,
} from '../types';

export const getDecks = () => {
  return dispatch => {
    dispatch({
      type: GETTING_DECK
    });
  }
}

export const saveDeckTitle = (id, title) => {
  return dispatch => {
    const deck = {
      id,
      title,
      questions: []
    }

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({ [id]: title }))

    dispatch({
      type: SAVING_DECK,
      payload: deck
    })
  }
}

export const removeDeck = (id) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KE)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })

}