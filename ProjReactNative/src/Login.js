import React from 'react';
import { View } from 'react-native';
import Input from './Input/Input';
import Button from './Button/Button';

class Login extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar 
                    backgroudColor='#dbdbdb'
                    barStyle='light-content'
                />
                    
                <Image
                    style={styles.img}
                    source={{uri : 'https://www.maitha.com.br/images/logoMaitha.png'}}
                />
                    
                <Input />
                <Button />
            </View>
        );
    }
}

export default Login;