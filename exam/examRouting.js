var express = require('express');
var examController = require('../exam/examController');
var examRouting = express.Router();


examRouting.route('/createExam').post(examController.createExam);
examRouting.route('/getExam').get(examController.getAllExam);
examRouting.route('/updateExam/:_id').post(examController.updateExam);
examRouting.route('/deleteExam').post(examController.deleteExam);
examRouting.route('/:id').get(examController.getById);
module.exports = examRouting