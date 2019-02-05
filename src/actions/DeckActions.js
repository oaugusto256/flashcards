import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'Flashcards:Storage';

import {
  LOADING,
  CLEAR_STORAGE,
  VERIFY_STORAGE,
  SUCCESS_GETTING_DECK,
} from '../types';

export const clearStorage = () => {
  return dispatch => {
    AsyncStorage.clear()
    .then(result =>{
      console.log("Everything were cleared!")
    })
    .catch(error =>{
      console.log("Something happend:", error)
    })

    dispatch({
      type: CLEAR_STORAGE
    })
  }
}

export const verifyCurrentStorage = () => {
  return dispatch => {
    dispatch({
      type: VERIFY_STORAGE
    });

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(result => {
      console.log(JSON.parse(result))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const getDecks = () => {
  return dispatch => {
    dispatch({
      type: LOADING,
    });

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(result => {
      dispatch({
        type: SUCCESS_GETTING_DECK,
        payload: JSON.parse(result)
      });
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const saveDeck = (id, title) => {
  return dispatch => {
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [id]: {
        title,
        questions: []
      }
    }))
    .then(result => {
      AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
      .then(result => {
        dispatch({
          type: SUCCESS_GETTING_DECK,
          payload: JSON.parse(result)
        });
      })
      .catch(error => {
        console.log(error)
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const removeDeck = (id) => {
  return dispatch => {
    dispatch({
      type: LOADING
    })

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(result => {
      let decks = JSON.parse(result)
      decks[id] = undefined
      delete decks[id]

      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))

      dispatch({
        type: SUCCESS_GETTING_DECK,
        payload: decks
      });
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const addCard = (card, deckId) => {
  return dispatch => {
    dispatch({
      type: LOADING
    });

    AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(result => {
      let decks = JSON.parse(result);
      decks[deckId].questions.push(card);

      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
      .then(result => {
        AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then(result => {
          dispatch({
            type: SUCCESS_GETTING_DECK,
            payload: JSON.parse(result)
          });
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log(error)
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}