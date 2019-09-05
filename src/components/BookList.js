/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import { Container, Content, Card, CardItem, Left, Body, Right, View } from 'native-base'

export default class BookList extends Component {
    render() {
        return (
            <View style={{ flex: 10, backgroundColor:'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row' ,flexWrap: 'wrap'}}>
                    <View style={{width: 210}}>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391120695l/16299.jpg'}} style={{height: 100, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Author</Text>
                                </Left>
                                <Body>
                                    <Text>Title</Text>
                                </Body>
                                <Right>
                                    <Text>Rating</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210}}>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391120695l/16299.jpg'}} style={{height: 100, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Author</Text>
                                </Left>
                                <Body>
                                    <Text>Title</Text>
                                </Body>
                                <Right>
                                    <Text>Rating</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210}}>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391120695l/16299.jpg'}} style={{height: 100, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Author</Text>
                                </Left>
                                <Body>
                                    <Text>Title</Text>
                                </Body>
                                <Right>
                                    <Text>Rating</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{width: 210}}>
                        <Card>
                            <CardItem>
                                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391120695l/16299.jpg'}} style={{height: 100, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>Author</Text>
                                </Left>
                                <Body>
                                    <Text>Title</Text>
                                </Body>
                                <Right>
                                    <Text>Rating</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </View>
        );
    }
}