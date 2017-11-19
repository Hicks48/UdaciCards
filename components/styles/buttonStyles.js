import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    buttonDark: {
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        width: 200,

        padding: 20,
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
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        width: 200,

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
    },

    buttonCorrect: {
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        width: 200,

        padding: 20,
        margin: 10,

        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#2ecc71',
        
        backgroundColor: '#2ecc71'
    },

    buttonCorrectText: {
        fontSize: 16,
        fontWeight: 'bold',

        color: '#fff',
    },

    buttonIncorrect: {
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        width: 200,

        padding: 20,
        margin: 10,

        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#e74c3c',
        
        backgroundColor: '#e74c3c'
    },

    buttonIncorrectText: {
        fontSize: 16,
        fontWeight: 'bold',

        color: '#fff',
    }
})