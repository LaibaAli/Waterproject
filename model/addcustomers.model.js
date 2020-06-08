const mongoose = require("mongoose");

var addcustomerSchema = new mongoose.Schema({
    name: {
        type:String
    },
    address:{
        type: String
    },
    contact :{
        type:Number
    },
    contact :{
        type:Number
    },
    bottle_desposite :{
        type:Number
    },
    bottle_rate :{
        type:Number
    },
    bottle_qty :{
        type:Number
    }
});

mongoose.model('Addcustomer',addcustomerSchema );