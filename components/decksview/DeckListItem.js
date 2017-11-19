import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class DeckListItem extends React.Component {

    render() {
        const {title, questions, onItemPress} = this.props

        return (
            <View style={styles.listItem}>
                <TouchableOpacity onPress={onItemPress}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{`${questions.length} cards`}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

      padding: 20,
      margin: 5,

      backgroundColor: '#fff',
      borderBottomWidth: 1.0,
      borderBottomColor: '#d6d7da'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    }
})

export default DeckListItem