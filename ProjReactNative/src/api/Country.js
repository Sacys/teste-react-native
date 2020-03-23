import axios from 'axios';

const baseURL = 'https://xplora-api.herokuapp.com/api';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZkdWR1ZkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2QVVycnk2SmhzSHlNeXFrRGY2blp1RUpVejBOaG5xRlhxWTZieDVyVFVxWk5tdFFTWVc3RyIsImlhdCI6MTU3ODk0MDY2MywiZXhwIjoxNTc4OTQ0MjYzfQ.WMeGkIWfSEZYRQ0vSiU7Z3jYQyqkGmeUiPRLkD6JWDo';

export const getCountries = async () => {
    let header = {
        headers: {
            'Content-Type': 'application/json',
            'token': token,
        }
    }

    try {
        let result = await axios.get(`${baseURL}/country`, header);
        return result;
    } catch (error) {
        console.log('Error:', error);
        return error;
    }
}