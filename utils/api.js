import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECKS'

export function createDeckStorage() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((decks) => (
            decks ? new Promise((resolve) => resolve(decks)) : AsyncStorage.setItem(DECK_STORAGE_KEY, {})
        ))
}

export function getDeck(title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then((decks) => ( decks[title] ))
}

export function addDeck(deck) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
}

export function removeDeck(title) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
            .then((decks) => {
                const newDecksStorage = {}

                const keys = Object.keys(decks).filter((deck) => (deck.title !== title))
                keys.forEach((key) => (
                    newDecksStorage[key] = decks[key]
                ))

                return AsyncStorage.setItem(DECK_STORAGE_KEY, decks)
            })
}