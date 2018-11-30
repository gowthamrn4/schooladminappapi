const express = require('express');
const teachersRouting = express.Router();
const teachersController = require('./teachersController');

teachersRouting.route('/addteacher').post(teachersController.addteacher);
teachersRouting.route('/getteachers').get(teachersController.getTeachers);



module.exports=teachersRouting;