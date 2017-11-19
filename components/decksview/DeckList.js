import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import DeckListItem from './DeckListItem'

class DeckList extends React.Component {

    renderItem = ({item}) => (
        <DeckListItem key={item.title} {...item} onItemPress={this.props.onItemPress}/>
    )

    render() {
        const { decks } = this.props

        return (
            <View style={styles.list}>
                <FlatList
                    data={decks}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => (index)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      backgroundColor: '#fff'
    }
})

export default DeckList