require("dotenv").config();
const connectDB = require("./db/connect")
const Contact = require("./models/contact")
const ContactJson = require("./contact.json")

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Contact.deleteMany();
        await Contact.create(ContactJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();