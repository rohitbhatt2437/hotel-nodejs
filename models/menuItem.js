const mongoose = require('mongoose')
const menuItemSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  price:{
    type:Number,
    required:true,
  },
  taste:{
    type:String,
    enum:["sweet", "spicy", "sour"],
    required:true,
  },
  is_drink:{
    type:Boolean,
    default:false,
  },
  ingredients:{
    type:[String],
    defalut:[],
  },
  num_sales:{
    type:Number,
    dafault:0,
  }
})

const menuItems = mongoose.model("menuItems", menuItemSchema)
module.exports = menuItems  