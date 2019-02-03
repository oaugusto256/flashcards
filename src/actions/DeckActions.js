import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'Flashcards:Storage';

import {
  LOADING,
  OPEN_DECK,
  SAVING_DECK,
  CLEAR_STORAGE,
  VERIFY_STORAGE,
  ERROR_GETTING_DECK,
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
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KE)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })

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