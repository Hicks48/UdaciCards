import { StackNavigator } from 'react-navigation'

import DecksView from '../decksview/DecksView'
import DeckView from '../deckview/DeckView'
import AddCardView from '../add-card/AddCardView'
import QuestionareView from '../questionare/QuestionareView'

const UdaciCardsNavigator = StackNavigator({
    DecksView: {
        'screen': DecksView
    },
    DeckView: {
        'screen': DeckView
    },
    AddCardView: {
        'screen': AddCardView
    },
    QuestionareView: {
        'screen': QuestionareView
    }
})

export default UdaciCardsNavigator