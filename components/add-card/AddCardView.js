import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

import FieldStyles from '../styles/FieldStyles' 
import ButtonStyles from '../styles/ButtonStyles'

import * as API from '../../utils/api'

class AddCardView extends React.Component {

    static navigationOptions = {
        title: 'Add Card'
    }

    constructor(props) {
        super(props)

        this.state = {
            question: '',
            answer: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            question: '',
            answer: ''
        })
    }

    onSubmit = () => {
        const { navigation } = this.props
        const { question, answer } = this.state
        const { deckTitle } = navigation.state.params

        API.addCardToDeck(deckTitle, question, answer)
            .then(() => {
                navigation.dispatch(NavigationActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home'}),
                        NavigationActions.navigate({ routeName: 'DeckView', params: { deckTitle }})
                    ]
                }))
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={FieldStyles.textInputField}
                    placeholder={'Question'}
                    value={this.state.question}
                    onChangeText={(text) => this.setState((state) => ({ ...state, question: text }))}
                />
                
                <TextInput 
                    style={FieldStyles.textInputField}
                    placeholder={'Answer'}
                    value={this.state.answer}
                    onChangeText={(text) => this.setState((state) => ({ ...state, answer: text }))}
                />
                
                <TouchableOpacity style={ButtonStyles.buttonDark} onPress={this.onSubmit}>
                    <Text style={ButtonStyles.buttonDarkText}>Submit</Text>
                </TouchableOpacity>
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

export default AddCardView