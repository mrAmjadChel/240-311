const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

//import module
const User = require('./route/FBlogin')
const Post = require('./route/Post')

//middleware
app.use(bodyParser.json())
app.use(cors())

//router middleware
app.use('/login',User)
app.use('/api',Post)

app.get('/',(req,res)=>{
    res.send("Welcome to server")
})

const uri = "mongodb+srv://DBPost:Amjad@44922@cluster0.aiuhxhk.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => 
    console.log('Connected to MongoDB')
    )
  .catch(err => 
    console.error('Error connecting to MongoDB', err)
    );

app.listen(8000,()=>{
    console.log('Server is ready!')
})