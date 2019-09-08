/* eslint-disable prettier/prettier */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import React from 'react'
import { Icon } from 'native-base'

//Splash Screen for loading
import SplashScreen from '../screens/Splash'

//AuthPage (using switch Navigator)
import LoginScreen from '../screens/AuthPage/Login'
import SignUpScreen from '../screens/AuthPage/SignUp'

//HomePage (using Tab Navigator)
import HomeScreen from '../screens/HomePage/home'
import HistoryScreen from '../screens/HomePage/history'
import ProfileScreen from '../screens/HomePage/profile'

//Dynamic page (using stack Navigator)
import DetailBookScreen from '../screens/DynamicPage/DetailBook'
import DonateBookScreen from '../screens/DynamicPage/DonateBook'
import GenreBookScreen from '../screens/DynamicPage/GenreBook'
import SearchBookScreen from '../screens/DynamicPage/SearchBook'

const GenrePage = createSwitchNavigator(
    {
        Genre: { screen: GenreBookScreen}
    }
)

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
        DetailBook: { screen: DetailBookScreen },
        GenreBook : { screen: GenrePage },
        SearchBook: { screen: SearchBookScreen },
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
            inactiveTintColor: 'gray',
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

const InitialNavigation = createSwitchNavigator(
    {
        Splash: { screen: SplashScreen },
        App: { screen: AppNavigation }
    }
)

export default createAppContainer( InitialNavigation );