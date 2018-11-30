const teacherModel = require('./teacherModel');

const addteacher=function(req,res){
    var teacher=teacherModel(req.body);
    teacher.save(function(err,teacher){
        if(err) return res.status(500).send('cannot add')
        else return res.send(teacher);
    })
}

const getTeachers=function(req,res){
    teacherModel.find(function(err,teachers){
        if(err) return res.status(500).send('cannot get');
        else return res.send(teachers)
    })
}

module.exports={
    addteacher:addteacher,
    getTeachers:getTeachers
}