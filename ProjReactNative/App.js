import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import Login from './src/Login'
import styles from './style';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroudColor='#dbdbdb' barStyle='light-content' />
        
        <Text style={styles.title}>Annyeonghaseyo</Text>
        
        <Login />
      </View>
    );
  }
}

export default App;