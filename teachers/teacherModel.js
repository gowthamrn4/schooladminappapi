const mongoose = require('mongoose');
const Schema = mongoose.Schema
const teacherModel = new Schema({
    name:String,
    gender:String,
    fathername:String,
    mothername:String,
    aadharnumber:String,
    dob:String,
    mobilenumber:String,
    doj:String,
    qualification:String,
    bloodgroup:String,
    fatheroccupation:String,
    motheroccupation:String,
    tamil:Boolean,
    english:Boolean,
    maths:Boolean,
    science:Boolean,
    social:Boolean

})

module.exports=mongoose.model('teacher',teacherModel)