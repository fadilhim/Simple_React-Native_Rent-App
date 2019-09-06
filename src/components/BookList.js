/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Card, CardItem, Body, View } from 'native-base'
import { connect } from 'react-redux';

class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleBookDetail = () => {
        this.props.navigation.navigate('DetailBook')
    }

    render() {
        return (
            <View style={{ flex: 10, backgroundColor:'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row' ,flexWrap: 'wrap'}}>
                    <View style={{width: 210, height: 300}}>
                        <Card>
                            <CardItem style={{height: 200, width: 205, paddingLeft: 0, paddingRight: 0}} onPress={() => this.props.navigation.navigate('DetailBook')} >
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391120695l/16299.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{height: 80}} >
                                <Body>
                                    <Text>Auth</Text>
                                    <Text>Tie</Text>
                                    <Text>Rating</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210, height: 300}}>
                        <Card>
                            <CardItem style={{height: 200, width: 205, paddingLeft: 0, paddingRight: 0}}>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529026760l/39832183.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{height: 80}}>
                                <Body>
                                    <Text>Author</Text>
                                    <Text>Title</Text>
                                    <Text>Rating</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210, height: 300}}>
                        <Card>
                            <CardItem style={{height: 200, width: 205, paddingLeft: 0, paddingRight: 0}}>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1369453733l/6953508.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{height: 80}}>
                                <Body>
                                    <Text>Author</Text>
                                    <Text>Title</Text>
                                    <Text>Rating</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210, height: 300}}>
                        <Card>
                            <CardItem style={{height: 200, width: 205, paddingLeft: 0, paddingRight: 0}}>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320562005l/4214.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{height: 80}}>
                                <Body>
                                    <Text>Author</Text>
                                    <Text>Title</Text>
                                    <Text>Rating</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210, height: 300}}>
                        <Card>
                            <CardItem style={{height: 200, width: 205, paddingLeft: 0, paddingRight: 0}}>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{height: 80}}>
                                <Body>
                                    <Text>Author</Text>
                                    <Text>Title</Text>
                                    <Text>Rating</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    
                    <TouchableOpacity onPress={()=> navigation.navigate('DetailBook')} >
                        <Text>Forgot</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const MapStateToProps = state => {
    return { users: state.users}
}

export default connect (MapStateToProps) (BookList)