const express = require('express')
const multer  = require('multer')
const Item = require('../Models/ItemsModal')
const path = require('path')

const ItemRouter = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb)=>{
    const fileExt = path.extname(file.originalname)
    const fileName = file.originalname
                     .replace(fileExt, '')
                     .split(' ')
                     .join('-') + Date.now()

    cb(null, fileName + fileExt)
  }
})

const upload = multer({ 
  storage: storage,
  limits: {
    fieldSize: 2000000 // 2MB
  },
  fileFilter: (req, file, cb)=>{
    if(
       file.mimetype == 'image/jpeg' ||
       file.mimetype == 'image/jpg' ||
       file.mimetype == 'image/png'
      ){
        cb(null, true)
      }else{
        cb(new Error('Only jpeg, jpg and png allowed'))
      }
  }
})

ItemRouter.post('/items', upload.single('image'), (req, res)=>{
    const URL = req.protocol + '://' + req.get('host')
    const fileUrl = URL + "/upload/" + req.file.filename;

    const newItem = new Item({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        catagory: req.body.catagory,
        image: fileUrl
    })
    newItem.save().then(()=>{
      res.status(200).json({msg:'Item Creation Successful'})
    }).catch(()=>{
      res.status(400).json({msg:'Item Creation Failed'})
    })
  })


ItemRouter.get('/items/all', (req,res)=>{
   Item.find({}, (err, docs)=>{
    if(docs){
      res.send(docs)
    }else{
      res.send(err)
    }
   })
})

ItemRouter.get('/items/:id', (req,res)=>{
  Item.findById({_id: req.params.id}, (err,docs)=>{
    if(docs){
      res.send(docs)
    }else{
      res.send(err)
    }
  })
})


module.exports = ItemRouter