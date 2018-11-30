const studentTransferModel = require('./studentTransferModel')
// const studentModel = require('../students/studentModel');
const express = require('./studentTransferModel');
const app = express()

var createstudentTransfer = function(req, res) {
    var transfer = new studentTransferModel(req.body)
    // var _id=req.body._id
    console.log(transfer)
    transfer.save(function(err, result) {
        if (err) return res.send('cannot add')
        else {
            res.send(result)
        }
    })
}

var getAllStudentsTransfer = function(req, res) {
    studentTransferModel.find(function(err, transfers) {
        if (err) {
            res.status(500).send('err')
        } else {
            res.send(transfers)
        

        }
    })
}



var deleteStudentTransfer=function(req,res){
    var _id=req.body._id
    studentTransferModel.findByIdAndRemove({_id},function(err,transfers){
            if(!err){
                res.status(204);
                res.send("removed");
            }
        });

}


var getById=function(req,res){
    studentTransferModel.findById(req.params.id,function(err,transfers){
        if(err){
            res.status(404);
            res.send("can not found");
        }else{
            res.status(200);
            res.send(transfers)
        }
    })
}


var updateStudentTransfer = function(req, res) {
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

    studentTransferModel.findByIdAndUpdate({ _id }, { name, fathername, aadharnumber, bloodgroup, dob, doj, fatheroccupation, gender, mobilenumber, mothername, standard, motheroccupation },
        function(err, transfer) {
            if (err) {
                res.status(404).send('connot update')
            } else {
                res.status(200).send(transfer);
            }
        })

}

module.exports = {
    createstudentTransfer: createstudentTransfer,
    getAllStudentsTransfer:getAllStudentsTransfer,
    deleteStudentTransfer:deleteStudentTransfer,
    getById:getById,
    updateStudentTransfer:updateStudentTransfer
}
