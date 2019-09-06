/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet,Text, Image, View,SafeAreaView, TouchableHighlight } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'

class BookCarousel extends React.Component {

    constructor(props){
        super(props)
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
            <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
                <Image source={{uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529026760l/39832183.jpg'}} />
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
                    autoplay={true}
                    autoplayDelay={3}
                    lockScrollWhileSnapping={true}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={250}
                    itemWidth={250}
                    itemHeight={1}
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

const MapStateToProps = state => {
    return { users: state.users}
}

export default connect (MapStateToProps) (BookCarousel)

const styles = StyleSheet.create({
    container: {
        flex: 10,
        flexDirection:'row',
        backgroundColor:'#131420',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
});
