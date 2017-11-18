import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    buttonDark: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

        padding: 10,
        margin: 10,

        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#000',
        
        backgroundColor: '#000'
    },

    buttonDarkText: {
        fontSize: 16,
        fontWeight: 'bold',

        color: '#fff',
    },

    buttonLigth: {
        padding: 10,
        margin: 10,

        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#000',

        backgroundColor: '#fff'
    },

    buttonLigthText: {
        fontSize: 16,
        fontWeight: 'bold',

        color: '#000',
    }
})