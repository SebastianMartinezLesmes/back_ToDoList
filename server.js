const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const ProductUser = require('./models/productUser')
const ProductList = require('./models/productList')
const app = express()

app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('hello port')
})

app.get('/getUser', async(req,res) => {
    try {
        const users = await ProductUser.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/getList', async(req,res) => {
    try {
        const users = await ProductList.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/createUser', async(req,res,next) => {    
    try{
        const product = await ProductUser.create(req.body)
        res.status(200).json(product);
    } catch {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.post('/createList', async(req,res,next) => {    
    try{
        const product = await ProductList.create(req.body)
        res.status(200).json(product);
    } catch {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.delete('/deleteList/:id', async(req,res) => {    
    try {
        const { id } = req.params;
        const product = await ProductList.findByIdAndDelete(id); 
        res.status(200).json(product);
    } catch {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put('/updateList/:id', async(req,res,next) => {    
    try{
        const {id} = req.params;
        const product = await ProductList.findByIdAndUpdate(id, {"state": 1})
        if(!product){
            return res.status(404).json({message: 'cannot not find the product'})
        }else{
            res.status(200).json(product);
        }
    } catch {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put('/updateListData/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nameList, description, date } = req.body;
        const updatedProduct = await ProductList.findByIdAndUpdate(
            id, 
            { "nameList": nameList, "description": description, "date": date },
            { new: true }
        );
        if (!nameList || !description || !date) {
            return res.status(400).json({ message: 'Datos incompletos o inválidos' });
        }        
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// conection with data base
mongoose.set("strictQuery", false)
mongoose.connect('mongodb://localhost:27017/toDoList').then(() => {
    console.log('conection mongoDB sucerfully')
    app.listen(5000, ()=>{
        console.log('Backend is running in port 5000')
    })
}).catch(() => {
    console.log('conection mongoDB error', error)
})