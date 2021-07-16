import axios from 'axios';

const api = axios.create({ baseURL: 'https://simpleanime.p.rapidapi.com/',  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'simpleanime.p.rapidapi.com'
  } });

export default api;