const mongoose = require('mongoose');

const FORMSCHEMA= new mongoose.Schema({
    question:{
        type: String,
        required: true,
        unique: true
    },
    answer:{
        type: String,
        required: true,
        unique: false
    },
    option:{
        type: Array,
    }
   
},
{ timestamps: true }
)

const FormSchema = new mongoose.model("FormSchema",FORMSCHEMA)

module.exports=FormSchema