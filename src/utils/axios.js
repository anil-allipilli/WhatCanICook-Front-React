import axios from 'axios';
const api = axios.create({
    baseURL: 'https://gentle-badlands-24784.herokuapp.com/api/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
    }
  });

export default api