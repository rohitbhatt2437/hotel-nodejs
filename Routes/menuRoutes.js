const express = require('express')
const router = express.Router()
const menuItems = require('../models/menuItem')

router.post('/', async(req, res)=>{
    try {
        const data = req.body
        const newMenu = new menuItems(data)
        const response = await newMenu.save()
        console.log('data saved');
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server eror"})
}
})

router.get('/', async (req,res)=>{  
    try {
        const data = await menuItems.find()
        console.log('data fetched');
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server eror"})
    }
})

router.get('/:tasteType', async (req, res)=>{
    try {
        const tasteType = req.params.tasteType
        if(tasteType==='sweet'||tasteType==='spicy'||tasteType==='sour'){
            const response = await menuItems.find({taste:tasteType})
            console.log('Items fetched');
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'taste not specified in list'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
    
})

module.exports = router