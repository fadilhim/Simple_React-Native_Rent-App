/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { View } from 'native-base'
import { Icon } from 'react-native-elements'

export default class Header extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search })
    };

    render() {
        const { search } = this.state

        return (
            <View>
                <View style={style.searchHeader}>
                    <SearchBar
                        placeholder= 'Search...'
                        placeholderTextColor= 'grey'
                        onChangeText={this.updateSearch}
                        value={search}
                        round={true}
                        containerStyle={style.searchInput}
                        inputContainerStyle={style.inputContainer}
                    />
                    <Text style={style.cancelText} onPress={() => this.props.navigation.navigate('Home')}>BATALKAN</Text>
                </View>
                <View style={style.searchBody}>
                    <View>
                        <Icon
                            raised
                            name='heart'
                            type='font-awesome'
                            color='#c55a54'
                            size={40}
                            onPress={() => console.log('hello')}
                        />
                        <Text>Romance</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='heart'
                            type='font-awesome'
                            color='#c55a54'
                            size={40}
                            onPress={() => console.log('hello')}
                        />
                        <Text>Romance</Text>
                    </View>
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
    searchHeader: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchInput: {
        backgroundColor: 'transparent',
        marginLeft: 5,
        width: 312,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    inputContainer: {
        backgroundColor: '#E5E6EE'
    },
    cancelText: {
        alignSelf: 'center',
        marginRight: 20,
        fontSize: 19,
        fontWeight: 600,
        color: 'grey',
    },
    searchBody: {
        flexDirection: 'row',
    }
})