import axios from 'axios'

const api = axios.create({
    baseURL:"https://ravyr-backend.herokuapp.com/" 
});

export default api;