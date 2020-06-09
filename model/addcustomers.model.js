const mongoose = require("mongoose");

const addcustomerSchema = new mongoose.Schema({
    name: {
        type:String
    },
    address:{
        type: String
    },
    contact :{
        type:Number
    },
    bottle_deposit :{
        type:Number
    },
    bottle_rate :{
        type:Number
    },
    bottle_qty :{
        type:Number
    }
});

mongoose.model('Addcustomer', addcustomerSchema );
