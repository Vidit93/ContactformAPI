const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
     },
    e_mail:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    msg:{
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("ContactData",contactSchema);