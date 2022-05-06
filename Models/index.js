const mongoose = require('mongoose');


const addGuests = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    surname:{
        type: 'string',
        required: true
    },

    food:{
        type:['string'],
        require: true
    },

    time:{
        type: Number,
require: true
    },  

    attendence:
        {type: Boolean,
            default: true
    }
})

module.exports = mongoose.model('guests' , addGuests)