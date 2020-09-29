const mongoose = require('mongoose');

//Schema descripe the document values  // required =does the user have to gibe the information  // default= when no value given it will take this value
const MovieReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const MovieReviews = mongoose.model('Moviereviews', MovieReviewSchema)

module.exports = MovieReviews;