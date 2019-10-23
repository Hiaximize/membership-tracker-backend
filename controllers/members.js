const express = require('express')
const router = express.Router()
const members = require('../models/members.js')

router.get('/', (req, resp)=>{
    members.find({}, (error, foundMembers)=>{
        // console.log(foundMembers)
        resp.json(foundMembers)
    })
})

router.get('/:id', (req, resp)=>{
    members.find({_id:{$eq: req.params.id}}, (error, member)=>{
        console.log(member)
        resp.json(member)
    })
})

router.put('/:id', (req, resp)=>{
    console.log(req.body)
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
    console.log(req.body)
    members.create(req.body, (error, createdMember)=>{
        console.log(error)
        console.log(createdMember)
        resp.json(createdMember)
    })
})

module.exports = router;