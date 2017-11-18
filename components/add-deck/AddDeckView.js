import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class AddDeckView extends React.Component {

    render() {
        
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput/>
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddDeckView