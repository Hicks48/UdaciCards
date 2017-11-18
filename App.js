import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import UdaciCardsStatusBar from './components/common/UdaciCardsStatusBar'
import UdaciCardsNavigator from './components/common/UdaciCardsNavigator'

class App extends React.Component {
  
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
  }
})

export default App
