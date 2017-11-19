import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

import FieldStyles from '../styles/FieldStyles'
import ButtonStyles from '../styles/ButtonStyles'

import * as API from '../../utils/api'

class AddDeckView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            deckName: ''
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput 
                    style={FieldStyles.textInputField}
                    placeholder={'Deck Title'}
                    value={this.state.deckName}
                    onChangeText={(text) => this.setState({ deckName: text })}
                />
                <TouchableOpacity style={ButtonStyles.buttonDark} onPress={this.submitNewDeck}>
                    <Text style={ButtonStyles.buttonDarkText}>Create Deck</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }

    submitNewDeck = () => {
        const { navigation } = this.props
        const { deckName } = this.state

        API.addDeck({
            [deckName]: {
                title: deckName,
                questions: []
            }
        }).then(() => {
            navigation.dispatch(NavigationActions.reset({
                index: 1,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home'}),
                    NavigationActions.navigate({ routeName: 'DeckView', params: { deckTitle: deckName }})
                ]
            }))
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 40,
        margin: 50
    }
})

export default AddDeckView