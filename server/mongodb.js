const {MongoClient} = require('mongodb');

const database = 'cvast';

const url = 'mongodb://0.0.0.0:27017';

const client = new MongoClient(url);

async function dbConnect(){
    let connection = await client.connect();

    let db = connection.db(database);

    return db.collection('user');

}

module.exports = dbConnect;