const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/Todo');

const {Users}     = require('./../server/models/Users');

// var id = '5a96dee89e56d50778ebe4e2';

// Todo.find({
//     _id : id
// }).then((Todos)=>{
//     console.log(Todos);
// });

// Todo.findOne({
//     _id : id
// }).then((Todo)=>{
//     console.log(Todo);
// });


// Todo.findById(id).then((Todo)=>{
//     console.log(Todo);
// });

var id  = '5a95735304cba6285ce506c5';

Users.findById(id).then((User)=>{
    if(!User){
       return console.log('No user is found');
    }
    console.log('User is ',User);
}).catch((e)=> console.log('ID id not vald'));