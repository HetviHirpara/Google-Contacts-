const mongoose = require('mongoose');

let schema =new mongoose.Schema({
    text : String,
    email : String,
    number : String,
    path : String

})

let mongooses = mongoose.model('contacts' , schema);

module.exports = mongooses


