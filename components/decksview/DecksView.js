import React from 'react'
import { View, StyleSheet } from 'react-native'

import DeckList from './DeckList'

class DecksView extends React.Component {
 
    render() {
      const { navigation } = this.props

      return (
          <View style={styles.container}>
            <DeckList 
              decks={this.getDecks()} 
              onItemPress={() => navigation.navigate('DeckView')}
            />
          </View>
      )
    }

    getDecks = () => {
        let data = {
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

        return Object.keys(data).map((key) => (data[key]))
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

export default DecksView