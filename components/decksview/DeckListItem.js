import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class DeckListItem extends React.Component {

    render() {
        const {title, questions, onItemPress} = this.props

        return (
            <View style={styles.deckListItem}>
                <TouchableOpacity onPress={onItemPress}>
                    <Text style={styles.deckListItemTitle}>{title}</Text>
                    <Text>{`${questions.length} cards`}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckListItem: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',

      padding: 20,
      margin: 5,

      borderBottomWidth: 1.0,
      borderBottomColor: '#d6d7da'
    },
    deckListItemTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    }
})

export default DeckListItem