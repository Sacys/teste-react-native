import React from 'react';
import {getCountries} from './api/country'
import { View, Text, StyleSheet } from 'react-native';

class Home extends React.Component{
    state = {
        countriesList: [],
    };

    componentDidMount(){
        this.loadCountries();
    }

    loadCountries = async () => {
        const response = await getCountries();
        const countriesList = response.data;
        this.setState({countriesList})
    }

    render() {
        return(
            <View style={estilo.container}>
                {this.state.countriesList.map(item => (
                    <Text style={estilo.text} key={item._id}>{item.countryName}</Text>
                ))}
            </View>
        );
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