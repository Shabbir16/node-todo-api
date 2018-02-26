//  const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

//  console.log(new ObjectID());

 var url = 'mongodb://localhost:27017';

 const dbName = 'TodoApp';

 MongoClient.connect(url,(err,client)=>{
    
    if(err)
        return console.log('Connection to the database has failed');

    console.log('Connected successfully to the  db');

    const db = client.db(dbName);

    db.collection('Users').findOneAndUpdate({
        _id :new ObjectID('5a92ce86dd9c1a3fe86c502b')
    },{
        $inc:{
            age : -1
        },
        $set : {
            name : 'Shabbir Hussain'
        }
    },{
        returnOriginal : false
    }).then((res)=>{
        console.log(res);
    });
    client.close();
 });