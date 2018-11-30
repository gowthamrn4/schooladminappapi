var express = require('express');
var studentsController = require('./studentsController');
var studentsRouting = express.Router();

studentsRouting.route('/createstudent').post(studentsController.createstudent);
studentsRouting.route('/getstudents').get(studentsController.getAllStudents);
studentsRouting.route('/updatestudent/:_id').post(studentsController.updateStudent);
studentsRouting.route('/deletestudent').post(studentsController.deleteStudent);
studentsRouting.route('/:id').get(studentsController.getById);
module.exports = studentsRouting