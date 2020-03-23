import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';

class Input extends React.Component {
    render() {
        return(
           <View>
               <TextInput
                    style={styles.input}
                    placeholder='Usuário'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry
                />
           </View> 
        );
    }
}

export default Input;