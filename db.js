const mongoose = require('mongoose')

// const mongoURL = 'mongodb://127.0.0.1:27017/hotels'
const mongoURL = process.env.DB_URL

mongoose.connect(mongoURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Connected to mongodb server');
})

db.on('error', (err)=>{
    console.log('Mongodb connection error ', err);
})

db.on('disconnected', ()=>{
    console.log('disConnected to mongodb server');
})