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

    // const collection = db.collection('Todos');
    // collection.insertOne({
    //     text : 'Something to do',
    //     completed : false
    // },(err,result)=>{
    //     if(err)
    //         return console.log('Some error has occured : ',err);
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
    //     name : 'Shabbir Hussain 12',
    //     age : 22,
    //     location : 'New Delhi'
    // },(err,results)=>{
    //     if(err)
    //         return console.log('Some error occured : ',err);
    //     console.log(JSON.stringify(results.ops,undefined,2));
    // });


    client.close();
 });