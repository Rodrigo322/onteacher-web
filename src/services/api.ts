import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-v1-onteacher.herokuapp.com',
})

export default api