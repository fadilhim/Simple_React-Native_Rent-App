import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createStackNavigator } from 'react-navigation-stack'

import Ionicons from 'react-native-vector-icons'

//AuthPage i
import LoginScreen from '../screens/AuthPage/Login'

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
        order:[ 'Home', 'History', 'Profile' ],
        animationEnabled: true,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
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
        Login: { screen: LoginScreen},
        Tabs: { screen: HomeTabNavigation }
    }
)

export default createAppContainer( AppNavigation );