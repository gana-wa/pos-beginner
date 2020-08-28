import Axios from 'axios';

export const fetchAllMenu = () => {
    return Axios.get(`${process.env.REACT_APP_API_ADDRESS}/products`);
};