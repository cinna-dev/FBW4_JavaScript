import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

const getReviews = () => api.get('/get-review')

const newReviews = (data) => api.post('/new-review', data) // res.data from req

const apis = {
    getReviews,
    newReviews
}

export default apis;