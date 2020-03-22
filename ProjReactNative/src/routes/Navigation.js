import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }   
    }
}

const Navigation = createStackNavigator(screens);

export default createAppContainer(Navigation);