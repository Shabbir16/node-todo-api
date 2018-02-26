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

    // db.collection('Users').deleteMany({name : "Shabbir Hussain"}).then((res)=>{
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({_id : new ObjectID("5a92853269d9ea1edc7d1a21")}).then((res)=>{
        console.log(res);
    });
    client.close();
 });