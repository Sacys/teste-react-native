import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import Login from './src/Login'
import styles from './style';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroudColor='#dbdbdb'
          barStyle='light-content'
        />
        
        <Image
          style={styles.img}
          source={{uri : 'https://www.maitha.com.br/images/logoMaitha.png'}}
        />
        
        <Login />

        {/* <Image
          style={styles.imgEffect}
          source={{uri : 'https://www.maitha.com.br/images/maithaBallLine.svg'}}
        /> */}
      </View>
    );
  }
}

export default App;