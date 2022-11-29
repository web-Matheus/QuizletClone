const mongoose = require("mongoose")



const CardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    frontCard:{
        type:String,
        required:true
    },
    backCard:{
        type:String,
        required:true
    }

})


const CardModel = mongoose.model("list",CardSchema)
module.exports = CardModel;