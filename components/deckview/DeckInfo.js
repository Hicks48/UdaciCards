import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckInfo extends React.Component {

    render() {
        const { title, questions } = this.props

        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text>{`${questions.length} cards`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#000'
    }
  })

export default DeckInfo