import React from 'react';
import axios from 'axios'

const baseURL = 'https://xplora-api.herokuapp.com/api'

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.getCountries();
    }
    
    getCountries = () => {
        let header = {
            header: {
                'Contet-Type': 'application/json',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZkdWR1ZkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2QVVycnk2SmhzSHlNeXFrRGY2blp1RUpVejBOaG5xRlhxWTZieDVyVFVxWk5tdFFTWVc3RyIsImlhdCI6MTU3ODk0MDY2MywiZXhwIjoxNTc4OTQ0MjYzfQ.WMeGkIWfSEZYRQ0vSiU7Z3jYQyqkGmeUiPRLkD6JWDo',
            }
        }

        let result = axios.get(`${baseURL}/statecity`, header);

        console.log(result);
    }

    // loadCountry = () => {
    //     fetch('https://xplora-api.herokuapp.com/api/statecity')
    //         .then( res => res.json() )
    //         .then( res => {
    //             this.setState({
    //                 data: res.results || []
    //             });
    //         });
    // }

    // componentDidMount() {
    //     this.loadCountry();
    // }

    render() {
        return (

            <View>
                {/* <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <Text>{item.countryName}</Text>
                    )}
                    keyExtractor={ item => item.id }
                /> */}
            </View>

            // <div>
            //     <table>

            //         <tr>
            //             <th scope="col">countryName</th>
            //             <th scope="col">CPF/CNPJ</th>
            //         </tr>

            //         {this.state.data.map(function(item)  
            //             {
            //                 return (
            //                     <tr>
            //                         <td>{item.countryName}</td>
            //                     </tr>
            //                 )
            //             }
            //         )}

            //     </table>
            // </div>
        ) 
    }
}