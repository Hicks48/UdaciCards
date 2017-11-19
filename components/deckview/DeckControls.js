import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import ButtonStyles from '../styles/ButtonStyles'

class DeckControls extends React.Component {

    render() {
        const { onStartPress, onAddCardPress } = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity style={ButtonStyles.buttonLigth} onPress={onAddCardPress}>
                    <Text style={ButtonStyles.buttonLigthText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ButtonStyles.buttonDark} onPress={onStartPress}>
                    <Text style={ButtonStyles.buttonDarkText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
})

export default DeckControls