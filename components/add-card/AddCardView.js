import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import FieldStyles from '../styles/FieldStyles' 
import ButtonStyles from '../styles/ButtonStyles'

class AddCardView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={FieldStyles.textInputField}/>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default AddCardView