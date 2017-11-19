import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import ButtonStyles from '../styles/ButtonStyles'

class QuestionView extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            showAnswer: false
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.index !== this.props.index) {
            this.setState({ showAnswer: false })
        }
    }

    onShowAnswerPress = () => {
        this.setState({ showAnswer: true })
    }

    render() {
        const { questions, index, onAnswerIncorrect, onAnswerCorrect } = this.props
        const { showAnswer } = this.state

        const question = questions[index].question
        const answer = questions[index].answer

        return (
            <View style={styles.container}>
                <Text style={styles.counter}>{`${index}/${questions.length}`}</Text>
                <Text style={styles.question}>{question}</Text>
                {showAnswer && <Text style={styles.answer}>{answer}</Text>}
                <TouchableOpacity style={ButtonStyles.buttonDark} onPress={this.onShowAnswerPress}>
                    <Text style={ButtonStyles.buttonDarkText}>Show Answer</Text>
                </TouchableOpacity>
                <View style={styles.space}></View>
                <TouchableOpacity style={ButtonStyles.buttonCorrect} onPress={onAnswerCorrect}>
                    <Text style={ButtonStyles.buttonCorrectText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ButtonStyles.buttonIncorrect} onPress={onAnswerIncorrect}>
                    <Text style={ButtonStyles.buttonIncorrectText}>Incorrect</Text>
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
    question: {
        fontSize: 40,
        margin: 20
    },
    answer: {
        fontSize: 18
    },
    space: {
        height: 100
    },
    counter: {
        fontSize: 18,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 10
    }
})

export default QuestionView