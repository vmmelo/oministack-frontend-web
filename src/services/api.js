import axios from 'axios'

const api = axios.create({
    baseURL: 'https://vmmelo1-bethehero.herokuapp.com/'
});

export default api;