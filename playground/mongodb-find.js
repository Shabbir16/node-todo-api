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

    // db.collection('Todos').find({completed : false}).toArray().then((docs)=>{
    //         console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Some error has occured');
    // });

    // db.collection('Users').find().count().then((count)=>{
    //     console.log('counts : ',count);
    // },(err)=>{
    // console.log('Some error has occured');
    // });

    db.collection('Users').find({name : 'Shabbir Hussain'}).count().then((count)=>{
        console.log('counts : ',count);
    },(err)=>{
        console.log('count : not found');
    });

    client.close();
 });