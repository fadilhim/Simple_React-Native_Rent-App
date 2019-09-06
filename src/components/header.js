/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { View } from 'native-base'

export default class Header extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search })
    };

    render() {
        const { search } = this.state

        return (
            <View style={style.container}>
                <View>
                    <Text style={style.text}>Bookz</Text>
                </View>
                <View >
                    <SearchBar
                        placeholder= 'Search...'
                        placeholderTextColor= 'grey'
                        onChangeText={this.updateSearch}
                        value={search}
                        round={true}
                        containerStyle={style.searchContainer}
                        inputContainerStyle={style.inputContainer}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'white',
        width: 430
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20
    },
    searchContainer: {
        backgroundColor: 'transparent',
        width: 270,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: 5,
    },
    inputContainer: {
        backgroundColor: '#E5E6EE'
    }
})