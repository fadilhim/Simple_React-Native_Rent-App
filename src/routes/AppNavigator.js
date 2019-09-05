/* eslint-disable prettier/prettier */
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Ionicons from 'react-native-vector-icons/Ionicons'

//AuthPage i
import LoginScreen from '../screens/AuthPage/Login'
import SignUpScreen from '../screens/AuthPage/SignUp'

//HomePage (Routing using Tab Navigation)
import HomeScreen from '../screens/HomePage/home'
import HistoryScreen from '../screens/HomePage/history'
import ProfileScreen from '../screens/HomePage/profile'

const HomeTabNavigation = createBottomTabNavigator(
    {
        Home: HomeScreen,
        History: HistoryScreen,
        Profile: ProfileScreen,
    },{
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                // let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`
                } else if (routeName === 'History') {
                    iconName = `time`
                } else if (routeName = 'Profile') {
                    iconName = 'person'
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)

const AppNavigation = createSwitchNavigator(
    {
        Login: { screen: LoginScreen },
        SignUp: { screen: SignUpScreen },
        Tabs: { screen: HomeTabNavigation }
    }
)

export default createAppContainer( AppNavigation );