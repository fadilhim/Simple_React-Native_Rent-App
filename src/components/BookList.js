/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Card, CardItem, Body, View, Spinner } from 'native-base'
import { connect } from 'react-redux'

import { getBook } from '../redux/actions/book'

class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {
            // books: [],
            // address: props.address,
            // search: props.books
        }
    }

    componentDidMount = async () => {
        this.getBook()
    }

    getBook = () => {
        // const search = this.props.search !== null ? '&search='+this.props.search : ''
        // const addressSort = this.props.match ? this.props.address+this.props.match.params.id : `${process.env.REACT_APP_HOST}/book/?sortby=book_id`+search
        
        // this.props.dispatch (getBook(addressSort), this.props.search)
        this.props.dispatch (getBook())
    }

    handleBookDetail = () => {
        this.props.navigation.navigate('DetailBook')
    }

    render() {
        // console.log('render', this.state)
        const books = this.props.books.booksList.data
        return (
            <View style={{ flex: 10, backgroundColor:'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row' ,flexWrap: 'wrap'}}>
                    {books ?
                                books.map((book) => {
                                    return (
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailBook', { book_id: book.book_id})} key={book.book_id}>
                                        <View style={{width: 210, height: 300}} >
                                            <Card>
                                                <CardItem style={{height: 200, width: 205, paddingLeft: 0, paddingRight: 0}} >
                                                    <Image source={{uri: book.image}} style={{height: 200, width: null, flex: 1}} />
                                                </CardItem>
                                                <CardItem style={{height: 80}} >
                                                    <Body>
                                                        <Text>{book.title}</Text>
                                                        <Text>{book.date_released}</Text>
                                                        <Text>{book.rating}</Text>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        </View>
                                        </TouchableOpacity>
                                    )
                                })
                        : <View><Spinner color='blue' style={{marginLeft: 200, marginTop: 100}} /></View>
                    }
                </View>
            </View>
        );
    }
}

const MapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect (MapStateToProps) (BookList)