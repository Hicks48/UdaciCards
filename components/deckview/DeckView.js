import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import DeckInfo from './DeckInfo'
import DeckControls from './DeckControls'

class DeckView extends React.Component {

    getData = () => {
        return {
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
          }
    }

    render() {
        const { title, questions } = this.getData()
        const { navigation } = this.props

        return (
            <View style={styles.deckView}>
                <DeckInfo title={title} questions={questions}/>
                <DeckControls
                    onStartPress={() => navigation.navigate('QuestionareView')}
                    onAddCardPress={() => navigation.navigate('AddCardView')}
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
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  })

export default DeckView