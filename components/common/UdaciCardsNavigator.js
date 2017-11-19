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
},
{
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#000',
        style: {
            backgroundColor: '#fff'
        }
    }
})

const stackNavigationOptions = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#000'
    }
}

const UdaciCardsNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: stackNavigationOptions
    },
    AddCardView: {
        screen: AddCardView,
        navigationOptions: stackNavigationOptions
    },
    QuestionareView: {
        screen: QuestionareView,
        navigationOptions: stackNavigationOptions
    }
})

export default UdaciCardsNavigator