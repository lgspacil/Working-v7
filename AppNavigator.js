import { createStackNavigator, createAppContainer } from 'react-navigation';
import Entry from './Screens/Entry';
import SignIn from './Screens/SignIn';

const AppNavigator = createStackNavigator({
    'Entry': { screen: Entry },
    'SignIn': { screen: SignIn },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    },
    initialRouteName: 'SignIn'
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
