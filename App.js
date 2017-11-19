import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import UdaciCardsStatusBar from './components/common/UdaciCardsStatusBar'
import UdaciCardsNavigator from './components/common/UdaciCardsNavigator'

import * as API from './utils/api'

class App extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      isStorageReady: false
    }
  }

  componentWillMount() {
    API.createDeckStorage().then((decks) => this.setState({ isStorageReady: true }))
  }

  render() {
    const { isStorageReady } = this.state

    return (
      <View style={styles.container}>
        <UdaciCardsStatusBar/>
        <UdaciCardsNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
})

export default App
