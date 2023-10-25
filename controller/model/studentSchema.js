
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "rollNo":{type:Number}
},{
    collection: "students"
});

module.exports = mongoose.model("studentSchema", studentSchema);

/*
    First {} => collection attributes
    Second {} => collection name
    Schema({
        name: {type:String},
        email : {type:String},
        rollNo: {type:Number}
    },{
        collection: "students"
    })
*/