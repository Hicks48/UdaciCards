import { StackNavigator, TabNavigator } from 'react-navigation'

import DecksView from '../decksview/DecksView'
import AddDeckView from '../add-deck/AddDeckView'
import DeckView from '../deckview/DeckView'
import AddCardView from '../add-card/AddCardView'
import QuestionareView from '../questionare/QuestionareView'

const Tabs = TabNavigator({
    DecksView: {
        screen: DecksView,
        navigationOptions: {
            tabBarLabel: 'Decks'
        }
    },
    AddDeckView: {
        screen: AddDeckView,
        navigationOptions: {
            tabBarLabel: 'Add Deck'
        }
    }
})

const UdaciCardsNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckView: {
        screen: DeckView
    },
    AddCardView: {
        screen: AddCardView
    },
    QuestionareView: {
        screen: QuestionareView
    }
})

export default UdaciCardsNavigator