/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text } from 'react-native'
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
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'white', width: 430}}>
                <View>
                    <Text>Bookz</Text>
                </View>
                <View >
                    <SearchBar
                        placeholder="Search..."
                        onChangeText={this.updateSearch}
                        value={search}
                        containerStyle={{backgroundColor: 'transparent', width: 270, borderTopWidth: 0, borderBottomWidth: 0, marginTop: 5, alignContent: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end'}}
                        inputContainerStyle={{backgroundColor: 'white'}}
                    />
                </View>
            </View>
        );
    }
}