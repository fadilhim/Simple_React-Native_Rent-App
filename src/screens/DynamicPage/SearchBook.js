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
                            size={35}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Romance</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='atom'
                            type='font-awesome'
                            color='#c55a54'
                            size={35}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Non-Fiction</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='heart'
                            type='font-awesome'
                            color='#c55a54'
                            size={35}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Fiction</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='heart'
                            type='font-awesome'
                            color='#c55a54'
                            size={35}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Crime</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='mask'
                            type='font-awesome'
                            color='#c55a54'
                            size={35}
                            // containerStyle={{ backgroundColor: 'black'}}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Drama</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='battle-net'
                            type='font-awesome'
                            color='#c55a54'
                            size={35}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Sci-fi</Text>
                    </View>
                    <View>
                        <Icon
                            raised
                            name='heart'
                            type='font-awesome'
                            color='#c55a54'
                            size={35}
                            onPress={() => this.props.navigation.navigate('GenreBook')}
                        />
                        <Text style={style.genreName}>Mystery</Text>
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
        fontWeight: '900',
        color: 'grey',
    },
    searchBody: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15,
    },
    genreName: {
        textAlign: 'center',
        color: 'grey'
    }
})