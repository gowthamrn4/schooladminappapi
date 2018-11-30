const mongoose=require('mongoose');

const Schema=mongoose.Schema

const examModel=new Schema({
      examName:String,
      subject:String,
      standard:String,
      examDate:String,
      examHallNo:String
 
})
module.exports=mongoose.model('exam',examModel);