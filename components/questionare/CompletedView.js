import React from 'react'
import { View, Text } from 'react-native'

class CompletedView extends React.Component {

    render() {
        const { questionsCorrect, questionsTotal } = this.props

        return (
            <View>
                <Text>{`You got ${questionsCorrect/questionsTotal*100}% of questions correct.`}</Text>
            </View>
        )
    }
}

export default CompletedView