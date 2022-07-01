const mongoose = require('mongoose')

const CatagorySchema = new mongoose.Schema({
    catagoryName: {
        type: String,
        require: true,
    },
    catagoryIcon:{
        type: String
    }
},
{
    timestamps: true
})

const Catagory = mongoose.model('Catagory', CatagorySchema)
module.exports = Catagory