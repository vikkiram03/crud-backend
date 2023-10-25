
const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
// Make the content into JSON document
const bodyParser = require("body-parser");
const app = express();

// Connect to MongoDB
mongoose.set("strictQuery", true);
// All dbname "schooldb" at the end "/___" of connection string !!
mongoose.connect("mongodb+srv://test:12345@cluster0.wpjcikc.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/studentRoute", studentRoute);

app.listen(4000, () => {
    console.log("Server connected to port 4000");
})