/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card, CardItem, Body, View, Spinner } from 'native-base'
import { connect } from 'react-redux'
import StarRating from 'react-native-star-rating'

import { getBook } from '../redux/actions/book'

class BookList extends Component {
    constructor(props){
        super(props)
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
            <View style={ styles.container }>
                <View style={ styles.containerView}>
                    {books ?
                        books.map((book) => {
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailBook', { book_id: book.book_id})} key={book.book_id}>
                                <View style={ styles.cardContainer} >
                                    <Card transparent>
                                        <CardItem style={ styles.cardImage } >
                                            <Image source={{uri: book.image}} style={ styles.image } />
                                        </CardItem>
                                        <CardItem style={ styles.cardBody } >
                                            <Body>
                                                <Text style={ styles.date }>{new Date(book.date_released).toDateString()}</Text>
                                                <Text style={ styles.title }>{book.title}</Text>
                                                {/* <Text>{book.rating}</Text> */}
                                                <StarRating
                                                    disabled={false}
                                                    maxStars={5}
                                                    rating={book.rating}
                                                    starSize={20}
                                                    fullStarColor={'#F3AC13'}
                                                />
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                </TouchableOpacity>
                            )
                        })
                        : <View><Spinner color='blue' style={ styles.spinner } /></View>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor:'white',
    },
    containerView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardContainer:{
        width: 210,
        height: 400,
    },
    cardImage: {
        height: 280,
        width: 205,
        paddingLeft: 0,
        paddingRight: 0
    },
    image: {
        height: 280,
        width: null,
        flex: 1,
        borderRadius: 15
    },
    cardBody: {
        height: 100,
    },
    date: {
        color: 'grey',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    spinner: {
        marginLeft: 200,
        marginTop: 100
    }

})

const MapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect (MapStateToProps) (BookList)