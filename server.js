const express = require('express')
const app = express()
const db = require('./db')

require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const Person = require('./models/person')
const menuItems = require('./models/menuItem')

app.get('/', (req, res)=>{
    res.send("Welcome to my hotel")
})

const menuRoutes = require('./Routes/menuRoutes')
app.use('/menu', menuRoutes)

const personRoutes = require('./Routes/personRoutes')
app.use('/person', personRoutes)

const PORT = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`app running on port ${port}`);
})