const express = require('express')
const Catagory = require('../Models/CatagoryModal')

const catagoryRouter = express.Router()

catagoryRouter.post('/catagory', async(req,res)=>{
    const newCatagory = new Catagory({
        catagoryName: req.body.catagoryName,
        catagoryIcon: req.body.catagoryIcon
    })
    await newCatagory.save().then(()=>{
        res.status(200).send()
    }).catch((err)=>{
        res.status(400).json({msg:'Catagory Creation Failed'})
    })

    console.log(req.body)
})

catagoryRouter.get('/catagory/show', (req,res)=>{
    Catagory.find({}, (err,docs)=>{
        if(docs){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})
module.exports = catagoryRouter