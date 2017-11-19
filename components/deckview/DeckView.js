import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import DeckInfo from './DeckInfo'
import DeckControls from './DeckControls'

import * as API from '../../utils/api'

class DeckView extends React.Component {

    constructor(props) {
        super(props)

        const { deckTitle } = this.props.navigation.state.params
        this.state = {
            title: deckTitle,
            questions: []
        }
    }

    componentWillMount() {
        const { deckTitle } = this.props.navigation.state.params

        API.getDeck(deckTitle).then((deck) => this.setState({
            title: deck.title,
            questions: deck.questions
        }))
    }

    render() {
        const { title, questions } = this.state
        const { navigation } = this.props

        return (
            <View style={styles.deckView}>
                <DeckInfo title={title} questions={questions}/>
                <DeckControls
                    onStartPress={() => navigation.navigate('QuestionareView', { deckTitle: title })}
                    onAddCardPress={() => navigation.navigate('AddCardView', { deckTitle: title })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default DeckView