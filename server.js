const  mongoose = require("mongoose")

const DB_HOST = "mongodb+srv://Evgeniy:aveo4292@cluster0.2xg3aur.mongodb.net/goit?retryWrites=true&w=majority"

mongoose.connect(DB_HOST).then(() => console.log("DataBase connect"))