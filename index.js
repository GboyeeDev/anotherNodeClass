const express = require("express")
const app = express()







const mongoose = require("mongoose")
const uri = "mongodb+srv://nobelium24:oluwatobi@cluster0.1sfkfgv.mongodb.net/firstClass?retryWrites=true&w=majority"
const connect = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(uri).then((result) => {
            // console.log(result)
            console.log("Mongoose don connect")
        })
    } catch (error) {
        console.log(error)
    }
}

connect()

app.listen("6000", () => {
    console.log("Server don start")
})