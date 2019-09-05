/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet,Text, Image, View,SafeAreaView, TouchableHighlight } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class BookCarousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
            {
                title:"Item 1"
            },
            {
                title:"Item 2"
            },
            {
                title:"Item 3"
            },
            {
                title:"Item 4"
            },
            {
                title:"Item 5"
            }
        ]}
    }

    _renderItem({item,index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>                 
                <Text style={{color:'#fff'}} >{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight
                onPress={
                    () => { this.carousel._snapToItem(this.state.activeIndex-1)}
                }>
                <Image source={require('../assets/back-to.png')}/>
            </TouchableHighlight>
            <View>
                <Carousel
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={250}
                    itemWidth={250}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) }
                />
            </View>
            <TouchableHighlight            
                onPress={
                    () => { this.carousel._snapToItem(this.state.activeIndex+1)}
                }>
                <Image source={require('../assets/next-to.png')}/>                
            </TouchableHighlight>
        </SafeAreaView>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor:'#131420',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100px,
    },
});
