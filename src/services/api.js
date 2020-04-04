import axios from 'axios'

const api = axios.create({
    baseURL: 'http://vmmelo1-bethehero.herokuapp.com/'
});

export default api;