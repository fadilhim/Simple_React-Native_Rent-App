/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

//HomePage after Login (Routing using Tab Navigation)
import Home from '../screens/HomePage/home'
import History from '../screens/HomePage/history'
import Profile from '../screens/HomePage/profile'

const AppNavigation = createStackNavigator(
    {
        Login: { screen: Login }
    },{
        headerMode: 'none'
    } 
)

const HomeTabNavigation = createBottomTabNavigator(
    {
        Home: { screen : Home },
        History: { screen: History },
        Profile: { screen: Profile }
    },{
        
    }
)


export default createAppContainer(AppNavigation);