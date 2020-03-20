import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class Home extends React.Component {
    
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       dataSource: null,
//     }
//   }

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
        //     return(
        //         <View style={estilo.container}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }
        // else {

        //     let country = this.state.dataSource.map((val, key) => {
        //         return <View key={key} style={estilo.item}>
        //                    <Text>{val.name}</Text>
        //                </View>
        //     });
            
        //     return (
        //         <View style={estilo.container}>
        //             {country}
        //         </View>
        //     );
        // }
    }
}

// const estilo = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#383737',
//         justifyContent: 'center',
//         textAlign: 'center',
//         paddingHorizontal: 25,
//     },
//     item: {
//         flex: 1,
//     }
// })

export default Home;