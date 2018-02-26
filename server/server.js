const mongoose = require('mongoose');
const dbName = 'TodoApp'
mongoose.Promise =  global.Promise;
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

var Todo = mongoose.model('Todo',{
    text :{
        type : String
    },
    completed : {
        type : Boolean
    },
    completedAt :{
        type : Number
    }
});

// var newTodo = new Todo({
//     text : 'Cook dinner'
// });

var newTodo = new Todo({
    text: 'Cooking dinner',
    completed:false,
    completedAt:26022018
})
newTodo.save().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(e)=>{
    console.log("Some error  has occured ",e);
});