import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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
            <View>
                <Text>{`${index}/${questions.length}`}</Text>
                <Text>{question}</Text>
                {showAnswer && <Text>{answer}</Text>}
                <TouchableOpacity onPress={this.onShowAnswerPress}>
                    <Text>Show Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAnswerCorrect}>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onAnswerIncorrect}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionView