import React from 'react'
import { View, Text } from 'react-native'

import QuestionView from './QuestionView'
import CompletedView from './CompletedView'

class QuestionareView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questionsCorrect: 0,
            questionsAnswered: 0,
            currentQuestion: 0
        }
    }

    onAnswerCorrect = () => {
        this.setState((state) => (
            {
                questionsCorrect: state.questionsCorrect + 1,
                questionsAnswered: state.questionsAnswered + 1,
                currentQuestion: state.currentQuestion + 1
            }
        ))
    }

    onAnswerIncorrect = () => {
        this.setState((state) => (
            {
                questionsCorrect: state.questionsCorrect,
                questionsAnswered: state.questionsAnswered + 1,
                currentQuestion: state.currentQuestion + 1
            }
        ))
    }

    getData = () => {
        return {
            title: 'React',
            questions: [
              {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
              },
              {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
              }
            ]
          }
    }

    render() {
        const deck = this.getData()
        const { questionsAnswered, questionsCorrect, currentQuestion } = this.state

        const questions = deck.questions

        return (
            <View>
                { questionsAnswered === questions.length ?
                    <CompletedView
                        questionsCorrect={questionsCorrect}
                        questionsTotal={questions.length}
                    /> :
                    <QuestionView 
                        questions={questions}
                        index={currentQuestion}
                        onAnswerCorrect={this.onAnswerCorrect}
                        onAnswerIncorrect={this.onAnswerIncorrect}
                    />
                }
            </View>
        )
    }
}

export default QuestionareView