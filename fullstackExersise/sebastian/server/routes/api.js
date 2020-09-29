const express = require('express');
const router = express.Router();
const MovieReviews = require('../models/MovieReviews')

// will be /api/get-review
router.get('/get-review', async (req, res, next) => {

    // we need await , to get data first from MongoDB and then send it as an response to the route
    let reviews = await MovieReviews.find(); //find like in mongoDB

    res.send(reviews)
})

router.post('/new-review', async (req, res, next) => {
    let {
        title,
        rating,
        comment
    } = req.body;

    let newReview = new MovieReviews({
        title: title,
        rating: parseInt(rating),
        comment: comment
    })

    //.save returns a Promise
    newReview.save()
        .then(response => {
            console.log(response);
            res.send({
                msg: 'new review save',
                mongo_response: response
            })
        }).catch(error => {
            console.log(error);
            res.send({
                msg: error
            })
        })
})

router.put('/update-review', (req, res) => {
    let {
        title,
        rating,
        comment,
        id
    } = req.body;

    //write only the varible as key
    let newData = {
        title,
        rating: parseInt(rating),
        comment
    }
    // find by Id and update the properties
    MovieReviews.findByIdAndUpdate(id, newData)
        .then(response => {
            console.log(response);
            res.send({
                msg: 'Review was successfully updated',
                mongo_response: response
            })
        }).catch(error => {
            res.send({
                msg: error
            })
        })
})

router.delete('/delete-review', (req, res) => {
    let {
        id
    } = req.body;

    MovieReviews.findByIdAndDelete(id)
        .then(response => {
            console.log(response);
            res.send({
                msg: 'successfully deleted Review',
                response
            })
        }).catch(error => {
            res.send({
                msg: error
            })
        })
})


module.exports = router;