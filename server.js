const mongoose = require("mongoose");
const DB_HOST = require("./config");

mongoose.connect(DB_HOST).then(() => console.log("DataBase connect"));
