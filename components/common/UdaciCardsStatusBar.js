import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

class UdaciStatusBar extends React.Component {

    render() {
        return (
            <View style={{ backgroundColor: '#f39c12' , height: Constants.statusBarHeight }}>
                <StatusBar translucent backgroundColor={'#f39c12'} barStyle={'light-content'}/>
            </View>
        )
    }
}

export default UdaciStatusBar