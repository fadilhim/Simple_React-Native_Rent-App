/* eslint-disable prettier/prettier */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { Icon } from 'native-base'
import React, { Component, Fragment } from 'react'

//AuthPage i
import LoginScreen from '../screens/AuthPage/Login'
import SignUpScreen from '../screens/AuthPage/SignUp'

//HomePage (Routing using Tab Navigation)
import HomeScreen from '../screens/HomePage/home'
import HistoryScreen from '../screens/HomePage/history'
import ProfileScreen from '../screens/HomePage/profile'
import DetailBookScreen from '../screens/DetailBook'
import DonateBookScreen from '../screens/DonateBook'

const ProfilePage = createStackNavigator(
    {
        Profile: { screen: ProfileScreen },
        DonateBook: { screen: DonateBookScreen }
    },{
        headerMode: "none",
    }
)

const HomePage = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        DetailBook: { screen: DetailBookScreen }
    },{
        headerMode: "none",
    }
)

const HomeTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (  
            <Icon type="AntDesign" name="home" style={{fontSize:30, color:`${tintColor}`}}/>
            )
        },
    },
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
            <Icon type="MaterialIcons" name="history" style={{fontSize:30, color:`${tintColor}`}}/>
            )
        },
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
            <Icon type="EvilIcons" name="user" style={{fontSize:35, color:`${tintColor}`}}/>
            )
        },
    },
    },{
        tabBarOptions: { 
        showIcon: true,
        activeTintColor: '#4B4C72',
        nactiveTintColor: 'gray',
        showLabel: false
        },
    })

const AppNavigation = createSwitchNavigator(
    {
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        Tabs: { screen: HomeTabNavigator }
    }
)

export default createAppContainer( AppNavigation );