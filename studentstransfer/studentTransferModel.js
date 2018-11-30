const mongoose=require('mongoose');

const Schema=mongoose.Schema

const studentsTransferModel=new Schema({
    name:String,
    gender:String,
    fathername:String,
    mothername:String,
    aadharnumber:String,
    dob:String,
    mobilenumber:String,
    doj:String,
    standard:String,
    bloodgroup:String,
    fatheroccupation:String,
    motheroccupation:String,
    reason:String,
    tostd:String,
    school:String,
    date:String,
    _id:String


})

module.exports=mongoose.model('transfer',studentsTransferModel);