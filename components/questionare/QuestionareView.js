import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

import QuestionView from './QuestionView'
import CompletedView from './CompletedView'

import { setLocalNotification, clearNotifications } from '../common/UdaciCardsNotifications'

import * as API from '../../utils/api'

class QuestionareView extends React.Component {

    static navigationOptions = {
        title: 'Quiz'
    }

    constructor(props) {
        super(props)

        this.state = {
            deck: { title: '', questions: [] },
            questionsCorrect: 0,
            questionsAnswered: 0,
            currentQuestion: 0
        }
    }

    componentWillMount() {
        const { deckTitle } = this.props.navigation.state.params

        API.getDeck(deckTitle).then((deck) => this.setState((state) => ({
            ...state,
            deck
        })))
    }

    onAnswerCorrect = () => {
        this.clearNotificationsIfQuizCompleted()
        this.setState((state) => (
            {
                questionsCorrect: state.questionsCorrect + 1,
                questionsAnswered: state.questionsAnswered + 1,
                currentQuestion: state.currentQuestion + 1
            }
        ))
    }

    onAnswerIncorrect = () => {
        this.clearNotificationsIfQuizCompleted()
        this.setState((state) => (
            {
                questionsCorrect: state.questionsCorrect,
                questionsAnswered: state.questionsAnswered + 1,
                currentQuestion: state.currentQuestion + 1
            }
        ))
    }

    clearNotificationsIfQuizCompleted = () => {
        const { deck, questionsAnswered } = this.state
        const { questions } = deck

        if (questionsAnswered === questions.length) {
            clearNotifications().then(() => setLocalNotification())
        }
    }

    onRestartQuiz = () =>{
        this.setState((state) => ({
            ...state,
            questionsCorrect: 0,
            questionsAnswered: 0,
            currentQuestion: 0
        }))
    }

    onBackToDeck = () => {
        const { navigation } = this.props
        const { deckTitle } = this.props.navigation.state.params

        navigation.dispatch(NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'}),
                NavigationActions.navigate({ routeName: 'DeckView', params: { deckTitle }})
            ]
        }))
    }

    render() {
        const { deck, questionsAnswered, questionsCorrect, currentQuestion } = this.state
        const questions = deck.questions

        return (
            <View style={styles.container}>
                { questionsAnswered === questions.length ?
                    <CompletedView
                        questionsCorrect={questionsCorrect}
                        questionsTotal={questions.length}
                        onRestartQuiz={this.onRestartQuiz}
                        onBackToDeck={this.onBackToDeck}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default QuestionareView