import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import UdaciCardsStatusBar from './components/common/UdaciCardsStatusBar'
import UdaciCardsNavigator from './components/common/UdaciCardsNavigator'

import { setLocalNotification } from './components/common/UdaciCardsNotifications'

import * as API from './utils/api'

class App extends React.Component {

  componentWillMount() {
    API.createDeckStorage()
  }

  componentDidMount() {
    setLocalNotification()
  }

  render() {
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
