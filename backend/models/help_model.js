const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const helpSchema = new Schema ({
    title :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
},{timestamps:true});

const HelpModel = mongoose.model('HelpModel',helpSchema)

module.exports = HelpModel;

