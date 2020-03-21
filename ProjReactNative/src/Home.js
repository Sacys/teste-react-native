import React from 'react';
import {getCountries} from './api/country'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class Home extends React.Component{
    
  constructor(props) {
    super(props)
    console.log(getCountries())
  }

//   componentDidMount() {
//     return fetch('https://randomuser.me/api/?results=20')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       this.setState({
//         isLoading: false,
//         dataSource: responseJson.country,
//       });
//     })
//     .catch(error => {
//       console.log(error)
//     });
//   }

    render() {

        
        // if(this.state.isLoading) {
            return(
                <View style={estilo.container}>
                    <ActivityIndicator />
                </View>
            );
        // }
        // else {
            // return(
            //     <View>
            //         <Text> {getCountries()} </Text>
            //     </View>
            // );
        // }
    }
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383737',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    item: {
        flex: 1,
    }
})

export default Home;