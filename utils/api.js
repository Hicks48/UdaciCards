import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECKS'

export function createDeckStorage() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
                .then((decks) => (
                    decks ? 
                        new Promise((resolve) => resolve(decks)) :
                        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(DEFAULT_DATA))
                ))
}

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
                .then((decks) => JSON.parse(decks))
}

export function getDeck(title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then((decks) => JSON.parse(decks))
            .then((decks) => ( decks[title] ))
}

export function addDeck(deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
}

export function addCardToDeck(deckTitle, question, answer) {
    return getDeck(deckTitle)
            .then((deck) => {
                deck.questions.push({ question, answer })
                return addDeck({ [deckTitle]: deck })
            })
}

export function removeDeck(title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then((decks) => JSON.parse(decks))
            .then((decks) => {
                const newDecksStorage = {}

                const keys = Object.keys(decks).filter((deck) => (deck.title !== title))
                keys.forEach((key) => (
                    newDecksStorage[key] = decks[key]
                ))

                return AsyncStorage.setItem(DECK_STORAGE_KEY, decks)
            })
}

const DEFAULT_DATA = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }