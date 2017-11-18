import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class AddCardView extends React.Component {

    render() {
        return (
            <View>
                <TextInput/>
                <TextInput/>
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddCardView