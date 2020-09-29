const express = require('express')
const router = express.Router()
const members = require('../../Members')

// Rou
// since we have the /api/members 'originalUrl; in index.js , we dont't need it here
//Get all Members

router.get('/', (req, res) => {
    res.json(members)

})

//Get single Members
router.get('/:id', (req, res) => {

    //const found = members.some(member => (member.id === parseInt(req.params.id)))
    const result = members.filter(member => (member.id === parseInt(req.params.id)))

    if (result.length) {
        res.json(result)
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} not found`
        })
    }
})

module.exports = router