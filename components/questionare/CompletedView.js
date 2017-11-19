import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import ButtonStyles from '../styles/ButtonStyles'

class CompletedView extends React.Component {

    render() {
        const { questionsCorrect, questionsTotal, onRestartQuiz, onBackToDeck } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.message}>
                    {
                        questionsTotal === 0 ?
                        'There are no questions in this deck.' :
                        `You got ${questionsCorrect/questionsTotal*100}% of questions correct.`
                    }
                </Text>

                <TouchableOpacity style={ButtonStyles.buttonLigth} onPress={onRestartQuiz}>
                    <Text style={ButtonStyles.buttonLigthText}>Restart Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ButtonStyles.buttonDark} onPress={onBackToDeck}>
                    <Text style={ButtonStyles.buttonDarkText}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: 24
    }
})

export default CompletedView