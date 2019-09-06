/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DetailBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg',
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: this.state.imgUrl }} style={styles.backgroundImage} ></Image>
            </View>
            <Image style={styles.avatar} source={{ uri: this.state.imgUrl }}/>
            <View style={styles.titleBox}>
                <Text style={styles.name}>Harry Potter and The Order of Phoenix</Text>
                <Text style={styles.info}>20 June 2007</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.description}>Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks. </Text>
                </View>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{color: 'white'}}>Rent Book</Text>  
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
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
})

const MapStateToProps = state => {
    return { users: state.users}
}

export default connect (MapStateToProps) (DetailBook)