import React from 'react';
import {getCountries} from '../../api/Country'
import { View, Text } from 'react-native';
import styles from './style'; 

class Home extends React.Component{
    state = {
        countriesList: [],
    };

    componentDidMount(){
        this.loadCountries();
    }

    loadCountries = async () => {
        const response = await getCountries();
        let countriesList = response.data;
        
        countriesList.sort(function (a, b) {
            if (a.countryName > b.countryName) {
            return 1;
            }
            if (a.countryName < b.countryName) {
            return -1;
            }
            return 0;
        });
        
        this.setState({ countriesList });
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.table}>
                    {this.state.countriesList.map(item => (    
                        <Text style={styles.text} key={item._id}>{item.countryName}</Text>
                    ))}
                </View>
            </View>
        );
    }
}

export default Home;