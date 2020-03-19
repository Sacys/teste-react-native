import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../src/Login';
import Home from '../src/Home';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }   
    }
}

const Navigation = createStackNavigator(screens);

export default createAppContainer(Navigation);