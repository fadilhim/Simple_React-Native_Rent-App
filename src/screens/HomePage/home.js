/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Header from '../../components/header'
import BookCarousel from '../../components/carousel'
import BookList from '../../components/BookList'
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SignUpForm: {}
        }
    }

    render() {
        return (
            <ScrollView>
            <View style={{ flex: 1}}>
                <Header />
                <BookCarousel />
                <BookList {...this.props} />
            </View>
            </ScrollView>
        );
    }
}

const MapStateToProps = state => {
    return { users: state.users}
}

export default connect (MapStateToProps) (HomeScreen)