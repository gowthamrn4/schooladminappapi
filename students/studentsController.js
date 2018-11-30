const studentModel = require('./studentModel')
const express = require('./studentModel');
const app = express()

var createstudent = function(req, res) {
    var student = new studentModel(req.body)
    student.save(function(err, result) {
        if (err) return res.send('cannot add')
        else {
            res.send(result)
        }
    })
}



var getAllStudents = function(req, res) {
    studentModel.find(function(err, students) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(students)
        }
    })
}

var deleteStudent=function(req,res){
    var _id=req.body._id
    studentModel.findByIdAndRemove({_id},function(err,students){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}

var getById=function(req,res){
    studentModel.findById(req.params.id,function(err,students){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(students)
        }
    })
}

var updateStudent = function(req, res) {
    var _id = req.params._id;
    var name = req.body.name;
    var fathername = req.body.fathername;
    var aadharnumber = req.body.aadharnumber;
    var bloodgroup = req.body.bloodgroup;
    var dob = req.body.dob;
    var doj = req.body.doj;
    var fatheroccupation = req.body.fatheroccupation;
    var gender = req.body.gender;
    var mobilenumber = req.body.mobilenumber;
    var mothername = req.body.mothername;
    var standard = req.body.standard;
    var motheroccupation = req.body.motheroccupation;
    console.log(_id);

    studentModel.findByIdAndUpdate({ _id }, { name, fathername, aadharnumber, bloodgroup, dob, doj, fatheroccupation, gender, mobilenumber, mothername, standard, motheroccupation },
        function(err, student) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(student);
            }
        })

}



module.exports = {
    createstudent: createstudent,
    getAllStudents: getAllStudents,
    updateStudent: updateStudent,
    deleteStudent:deleteStudent,
    getById:getById
}