const express = require('express')
const router = express.Router()
const members = require('../models/members.js')
// getting error seemingly here trying to find the index path on heroku
router.get('/', (req, resp)=>{
    members.find({}, (error, foundMembers)=>{
        resp.json(foundMembers)
    })
})

router.get('/:id', (req, resp)=>{
    members.find ({_id:{$eq: req.params.id}}, (error, member)=>{
        resp.json(member)
    })
})

router.put('/:id', (req, resp)=>{
    members.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedMember)=>{
        resp.json(updatedMember)
    })
})

router.delete('/:id', (req, resp)=>{
    members.findByIdAndRemove(req.params.id, (error, deletedMember)=>{
        if (error){
            console.log(error)
        }
        else{
            resp.json(deletedMember)
        }
    })
})

router.post('/', (req, resp)=>{
    members.create(req.body, (error, createdMember)=>{
        resp.json(createdMember)
    })
})

module.exports = router;