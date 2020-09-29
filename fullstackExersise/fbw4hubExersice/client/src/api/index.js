import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

const getProfile = () => api.get('/get-profile')

const newProfile = (data) => api.post('/new-profile', data) // res.data from req

const apis = {
    getProfile,
    newProfile
}

export default apis;