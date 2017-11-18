import { StackNavigator } from 'react-navigation'

import DecksView from '../decksview/DecksView'
import DeckView from '../deckview/DeckView'

const UdaciCardsNavigator = StackNavigator({
    DecksView: {
        'screen': DecksView
    },
    DeckView: {
        'screen': DeckView
    }
})

export default UdaciCardsNavigator