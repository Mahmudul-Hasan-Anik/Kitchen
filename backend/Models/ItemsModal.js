const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    catagory:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

const Item = mongoose.model('items', ItemSchema)
module.exports = Item