import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import FieldStyles from '../styles/FieldStyles'
import ButtonStyles from '../styles/ButtonStyles'

class AddDeckView extends React.Component {

    render() {
        
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput style={FieldStyles.textInputField}/>
                <TouchableOpacity style={ButtonStyles.buttonDark}>
                    <Text style={ButtonStyles.buttonDarkText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeckView