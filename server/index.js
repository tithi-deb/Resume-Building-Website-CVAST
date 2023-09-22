const {MongoClient} = require('mongodb');

const database = 'cvast';

const url = 'mongodb://0.0.0.0:27017';

const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();

    let db = result.db(database);

    let collection = db.collection('user');

    let user_data = await collection.find({}).toArray();

    console.log(user_data);
}

getData();