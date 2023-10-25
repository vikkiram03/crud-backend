
const express = require("express");
const studentSchema = require("./model/studentSchema");
const studentRoute = new express.Router();

// Post Request (Create)
studentRoute.post("/create-student", (req, res) => {
    studentSchema.create(req.body, (err, data) => {
        if (err) return err;
        else res.json(data);
    })
});                
// http://localhost:4000/studentRoute/create-student and if it is a POST request -> create() 

// Get Request
studentRoute.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if (err) return err;
        else res.json(data);
    })
});                 
// http://localhost:4000/studentRoute/ and if it is a GET request => find() [all documents]

// Get and  Put Request
studentRoute.route("/update-student/:id")
    .get((req, res) => {
        studentSchema.findById(req.params.id,(err, data) => {
            if (err) return err;
            else res.json(data);
        })
    })
    .put((req, res) => {
        studentSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) => {
            if (err) return err;
            else res.json(data);
        })
    });
// In front end,
// Axios.put(url, obj)
// Axios.put(http://localhost:4000/studentRoute/update-student/652d212d36a2dafa3f7fb4e0, {"name":"..", "email":"..","rollNo":".."})

// http://localhost:4000/studentRoute/update-student/652d212d36a2dafa3f7fb4e0 and if it is a GET request -> findById() [Raj document alone]
// http://localhost:4000/studentRoute/update-student/652d212d36a2dafa3f7fb4e0 and if it is a PUT request -> findByIdAndUpdate() 
    
// Delete Request
studentRoute.delete("/delete-student/:id", (req, res) => {
    studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return err;
        else res.json(data);
    })
});      
// http://localhost:4000/studentRoute/delete-student/652d212d36a2dafa3f7fb4e0 and if it is a DELETE request -> findByIdAndRemove() 

module.exports = studentRoute;

// _id : 652d212d36a2dafa3f7fb4e0
// Note: By default, every request will be a GET Request