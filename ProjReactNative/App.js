import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import Navigation from './routes/Navigation';
// import Login from './src/Login';
import styles from './style';

class App extends React.Component {
  render() {
    return (  
        <Navigation />
    );
  }
}

export default App;