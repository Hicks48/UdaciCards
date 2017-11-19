import React from 'react'
import { View, StyleSheet } from 'react-native'

import DeckList from './DeckList'

import * as API from '../../utils/api'

class DecksView extends React.Component {
 
    constructor(props) {
      super(props)

      this.state = {
        decks: []
      }
    }

    getData = () => {
      API.getDecks()
        .then((decks) => Object.keys(decks).map((key) => (decks[key])))
        .then((decks) => this.setState({ decks }))
    }

    componentWillMount() {
      this.getData()
    }

    componentWillReceiveProps(nextProps) {
      this.getData()
    }

    render() {
      const { navigation } = this.props
      const { decks } = this.state

      return (
          <View style={styles.container}>
            <DeckList 
              decks={decks}
              onItemPress={(deckTitle) => navigation.navigate('DeckView', { deckTitle })}
            />
          </View>
      )
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