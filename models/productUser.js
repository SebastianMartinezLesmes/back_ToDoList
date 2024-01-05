const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        idUser:{
            type: Number,
            required:[true, "pliss add an Id for user"]
        },
        role:{
            type: String,
            default: "client"
        },
        nameUser:{
            type: String,
            required:[true, "pliss add a nameUser for user"]
        },
        email:{
            type: String,
            required:[true, "pliss add an email for user"]
        },
        passwordUser:{
            type: String,
            required:[true, "pliss add a passwordUser for user"]
        },
        state:{
            type: String,
            default: 'activo'
        },
    }
)

const ProductUser = mongoose.model('users', productSchema)

module.exports = ProductUser;