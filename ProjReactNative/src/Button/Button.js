import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

class Button extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => alert('Cadastro Works')}>
                    <Text style={styles.buttonText}> CADASTRE-SE </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={() => alert('Login Works')}>
                    <Text style={styles.buttonText}> LOGIN </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Button;