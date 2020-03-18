import React from 'react';
import { View } from 'react-native';
import Input from './Input/Input';
import Button from './Button/Button';

class Login extends React.Component {
    render() {
        return(
            <View>
                <Input />
                <Button />
            </View>
        );
    }
}

export default Login;