const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const AuthRouter = require('./Router/AuthRoutes');
const ItemRouter = require('./Router/ItemRoutes');
const catagoryRouter = require('./Router/CatagoryRoutes')
const app = express()

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log(`Database connected`)
})

//ALL ROUTES LINK HERE
app.use("/upload", express.static(path.join(__dirname, "uploads"))); 
app.use('/auth/api', AuthRouter)
app.use('/menu/api', ItemRouter)
app.use('/items/api', catagoryRouter)

app.get('/', (req, res)=>{
  res.send('Hello World')
})

const port = 8000

app.listen(port, ()=>{
    console.log(`SERVER RUNNING PORT ${port}`)
})