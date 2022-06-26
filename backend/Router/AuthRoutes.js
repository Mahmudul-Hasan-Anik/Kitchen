const express = require('express')
const bcrypt = require('bcrypt');
const Authantication = require('../Models/AuthModal')

const AuthRouter = express.Router()

AuthRouter.post('/registration', (req,res)=>{
    const newAuth = new Authantication({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    newAuth.save().then(()=>{
        console.log(`Registration Successful`)
    }).catch((err)=>{
        console.log(err)
    })
})

AuthRouter.post('/login', async(req,res)=>{
    const auth = await Authantication.findOne({email: req.body.email})

    if(auth){
        if(bcrypt.compareSync(req.body.password, auth.password)){
            res.send({
               _id: auth._id,
               name: auth.name,
               email: auth.email
            })
            return
        }
    }
    res.status(400).json({msg:'Login Not successful'})
})
module.exports = AuthRouter