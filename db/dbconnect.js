const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/contactlist').then(() => {
    console.log("DB connect");
}).catch((err) => {
    console.log("Errer",err);
})

module.exports = mongoose ;

