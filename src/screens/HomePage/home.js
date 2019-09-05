/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../components/header'
import BookCarousel from '../../components/carousel'
import BookList from '../../components/BookList'

class HomeScreen extends Component {
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

export default HomeScreen