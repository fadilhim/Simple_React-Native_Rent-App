/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../components/header'
import BookCarousel from '../../components/carousel'
import BookList from '../../components/BookList'
import AsyncStorage from '@react-native-community/async-storage'

import { getProfile } from '../../redux/actions/user'
import { connect } from 'react-redux';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async() => {
        await this.props.dispatch(getProfile())
        console.log(this.props.users)
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <Header />
                <BookCarousel />
                <BookList />
            </View>
        );
    }
}

const MapStateToProps = state => {
    return { users: state.users}
}

export default connect (MapStateToProps) (HomeScreen)