import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class DeckControls extends React.Component {

    render() {
        const { onStartPress, onAddCardPress } = this.props

        return (
            <View>
                <TouchableOpacity style={styles.buttonLigth} onPress={onAddCardPress}>
                    <Text style={styles.buttonLigthText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDark} onPress={onStartPress}>
                    <Text style={styles.buttonDarkText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonDark: {
        padding: 10,
        margin: 10,

        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#000',
        
        backgroundColor: '#000'
    },

    buttonDarkText: {
        fontSize: 16,
        fontWeight: 'bold',

        color: '#fff',
    },

    buttonLigth: {
        padding: 10,
        margin: 10,

        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#000',

        backgroundColor: '#fff'
    },

    buttonLigthText: {
        fontSize: 16,
        fontWeight: 'bold',

        color: '#000',
    }
})

export default DeckControls