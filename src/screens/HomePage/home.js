/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Header from '../../components/header'
import BookCarousel from '../../components/carousel'
import BookList from '../../components/BookList'
import { ScrollView } from 'react-native-gesture-handler';

// import { getProfile } from '../../redux/actions/user'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async() => {
        // await this.props.dispatch(getProfile())
        // console.log(this.props.users)
    }

    render() {
        return (
            <ScrollView>
            <View style={{ flex: 1}}>
                <Header />
                <BookCarousel />
                <BookList />
            </View>
            </ScrollView>
        );
    }
}

const MapStateToProps = state => {
    return { users: state.users}
}

export default connect (MapStateToProps) (HomeScreen)