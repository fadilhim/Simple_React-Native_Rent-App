/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

import { getBookById, rentBookByUser } from '../redux/actions/book'
class DetailBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // formData : {
            //     user_id: 8,
            //     book_id: 80
            // }
        }
    }

    componentDidMount = async() => {
        this.getBookById(rentBookByUser())
    }

    getBookById = () => {
        this.props.dispatch(getBookById(this.props.navigation.getParam('book_id')))
    }

    handleRent = () => {
        this.props.dispatch(rentBookByUser({ user_id: 8, book_id: this.props.books.bookDetail.book_id }))
    }

    render() {
        const book = this.props.books.bookDetail
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{uri: book.image }} style={styles.backgroundImage} ></Image>
                </View>
                <Image style={styles.avatar} source={{ uri: book.image }}/>
                <View style={styles.titleBox}>
                    <Text style={styles.name}>{book.title}</Text>
                    <Text style={styles.info}>{book.date_released}</Text>
                </View>
                {/* <ScrollView> */}
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.description}>{book.description}</Text>
                    </View>
                </View>
                {/* </ScrollView> */}
                <View style={styles.body}>
                    {book.availability == 1 ?
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleRent()}>
                            <Text style={{color: 'white'}}>Rent Book</Text>  
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.buttonRentedContainer}>
                            <Text style={{color: 'white'}}>Book is Requested</Text>  
                        </TouchableOpacity>
                    }
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    titleBox:{
        width: 250,
        height: 100,
        marginBottom:10,
        position: 'absolute',
        marginTop: 185,
        marginLeft: 20
    },
    header:{
        height:270,
    },
    avatar: {
        width: 130,
        height: 185,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        position: 'absolute',
        marginTop: 130,
        marginLeft: 270
    },
    name:{
        fontSize:20,
        color: 'white',
        fontWeight: 'bold',
    },
    body:{
        // marginTop:10,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    info:{
        fontSize:16,
        color: "white",
        marginTop: 10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:25,
        textAlign: 'justify'
    },
    buttonContainer: {
        marginTop: 330,
        marginLeft: 90,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:250,
        borderRadius:30,
        backgroundColor: "#F4CF5D",
    },
    buttonRentedContainer: {
        marginTop: 330,
        marginLeft: 90,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:250,
        borderRadius:30,
        backgroundColor: "grey",
    },
})

const MapStateToProps = state => {
    return { books: state.books}
}

export default connect (MapStateToProps) (DetailBook)