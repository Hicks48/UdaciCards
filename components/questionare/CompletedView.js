import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class CompletedView extends React.Component {

    render() {
        const { questionsCorrect, questionsTotal } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.message}>
                    {
                        questionsTotal === 0 ?
                        'There are no questions in this deck.' :
                        `You got ${questionsCorrect/questionsTotal*100}% of questions correct.`
                    }
                </Text>
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