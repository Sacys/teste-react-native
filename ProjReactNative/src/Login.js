import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from './Input/Input';
import styles from './style';

export default function Login({navigation}) {
    
    const pressHandler = () => {
        navigation.navigate('Home');
    }
    
    return(
        <View style={styles.container}>     
            <Image style={styles.img} source={{uri : 'https://www.maitha.com.br/images/logoMaitha.png'}} />
                
            <Input />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => alert('Cadastre-se')}>
                    <Text style={styles.buttonText}> CADASTRE-SE </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={pressHandler}>
                    <Text style={styles.buttonText}> LOGIN </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}