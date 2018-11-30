var express = require('express');
var studentsTransferController = require('./studentTransferController');
var studentsTransferRouting = express.Router();

studentsTransferRouting.route('/createStudentTransfer').post(studentsTransferController.createstudentTransfer);
studentsTransferRouting.route('/getstudentsTransfer').get(studentsTransferController.getAllStudentsTransfer);
studentsTransferRouting.route('/deletestudentTransfer').post(studentsTransferController.deleteStudentTransfer);
studentsTransferRouting.route('/:id').get(studentsTransferController.getById);
studentsTransferRouting.route('/updatestudentTransfer/:_id').post(studentsTransferController.updateStudentTransfer);




module.exports = studentsTransferRouting



