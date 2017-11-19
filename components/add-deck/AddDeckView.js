import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import FieldStyles from '../styles/FieldStyles'
import ButtonStyles from '../styles/ButtonStyles'

class AddDeckView extends React.Component {

    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={FieldStyles.textInputField}/>
                <TouchableOpacity style={ButtonStyles.buttonDark}>
                    <Text style={ButtonStyles.buttonDarkText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
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