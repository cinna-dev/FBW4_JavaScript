const express = require('express')
const router = express.Router()
let members = require('../../Members') // should not be const so it can be reasigned // changing the source member array
const uuid = require('uuid')

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



//Create a member
// Content-Type : application/json
router.post('/', (req, res) => {
    //res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({
            msg: 'please add name and email'
        })
    }
    members.push(newMember)
    res.json(members)
});

//Update Member 
/*  copy get single member */
router.put('/:id', (req, res) => {

    //const found = members.some(member => (member.id === parseInt(req.params.id)))
    const found = members.some(member => (member.id === parseInt(req.params.id)))

    if (found) {
        const updatedMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updatedMember.name ? updatedMember.name : member.name
                member.email = updatedMember.email ? updatedMember.email : member.email
                res.json({
                    msg: `Member with id : ${req.params.id}  has been updated as below :`,
                    member //when we write only member it meeans    member : member 
                })
            }
        })
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} Could not found`
        })
    }
})

//Deleter Member "my Version"
/* router.delete('/:id', (req, res) => {

    const result = members.filter(member => (member.id !== parseInt(req.params.id)))

    if (members.length > result.length) {
        members = result
        res.json(result)
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} not found`
        })
    }
}) */



//Delete Member "Official Version"
router.delete('/:id', (req, res) => {

    const found = members.some(member => (member.id === parseInt(req.params.id)))

    if (found) {
        res.json(members = members.filter(member => (member.id !== parseInt(req.params.id))))
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} not found`
        })
    }

})


module.exports = router