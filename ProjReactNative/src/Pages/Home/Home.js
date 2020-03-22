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
        const countriesList = response.data;
        countriesList.sort();
        this.setState({ countriesList });
    }

    render() {
        return(
            <View style={styles.container}>
                <table>
                    {this.state.countriesList.map(item => (    
                        <tr>
                            <td>
                                <Text style={styles.text} key={item._id}>{item.countryName}</Text>
                            </td>
                        </tr>
                    ))}
                </table>
            </View>
        );
    }
}

export default Home;