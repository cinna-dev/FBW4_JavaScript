const mongoose = require('mongoose');

//Schema descripe the document values  // required =does the user have to gibe the information  // default= when no value given it will take this value
const ProflieSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    gitHub: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    youtube: {
        type: String,
        required: true
    }
});

const Profile = mongoose.model('ProflieSchema', ProflieSchema)

module.exports = Profile;