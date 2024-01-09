const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        idList:{
            type: Number,
            required:[true, "pliss add an Id for List"]
        },
        nameList:{
            type: String,
            required:[true, "pliss add a nameUser for List"]
        },
        description:{
            type: String,
            required:[true, "pliss add an email for List"]
        },
        state:{
            type: Number,
            default: 0
        },
        idUserFK:{
            type: Number,
            required:[true, "pliss add an idUserFK for List"]
        },
    }
)

const ProductList = mongoose.model('lists', productSchema)

module.exports = ProductList;