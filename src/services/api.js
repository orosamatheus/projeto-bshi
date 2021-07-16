import axios from 'axios';

const api = axios.create({ baseURL: 'https://simpleanime.p.rapidapi.com/',  headers: {
    'x-rapidapi-key': '52e9263e28mshf17bad88e09c3dcp18a479jsn8d5b61860004',
    'x-rapidapi-host': 'simpleanime.p.rapidapi.com'
  } });

export default api;