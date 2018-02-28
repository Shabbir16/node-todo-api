const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/Todo.js');
var {Users} = require('./models/Users');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    // res.send({text : 'Hello world'});
    // console.log(req.body);
    // var newTodo = new Todo({
    //     text : req.body.text
    // });

    // newTodo.save().then((docs)=>{
    //     console.log(docs);
    //     res.send(docs);
    // },(err)=>{
    //     console.log(err);
    //     res.status(400).send(err);
    // });

    var newTodo = new Todo({
        text : req.body.text,
        completed : req.body.completed,
        completedAt: req.body.completedAt
    });

    newTodo.save().then((docs)=>{
        console.log(docs);
        res.send(docs);
    },(err)=>{
        console.log(err);
        res.status(400).send(err);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
})

app.listen(3000); 

module.exports = {app};