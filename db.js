

const mongoose=require("mongoose")

const connection=mongoose.connect('mongodb+srv://vikram:vikramnaik@cluster0.dt8oe9s.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0')

module.exports={connection}

