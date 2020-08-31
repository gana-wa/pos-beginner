import Axios from 'axios';

export const fetchAllMenu = () => {
    return Axios.get(`${process.env.REACT_APP_API_ADDRESS}/products`);
};

export const fetchAllHistory = () => {
    return Axios.get(`${process.env.REACT_APP_API_ADDRESS}/history`);
};

export const showHistory = () => {
    return Axios.get(`${process.env.REACT_APP_API_ADDRESS}/history/history/show`);
};

export const login = (data) => {
    return Axios.post(`${process.env.REACT_APP_API_ADDRESS}/auth/login`, data);
};

export const register = (data) => {
    return Axios.post(`${process.env.REACT_APP_API_ADDRESS}/auth/register`, data);
}