const express = require('express');

const mongodb = require('mongodb');

const dbConnect = require('./mongodb.js');

const app = express();

app.use(express.json());


app.get('/',async(req,res)=>{
    let data = await dbConnect();

    data = await data.find().toArray();

    res.send(data);
})

app.post('/',async(req,res)=>{
    let data = await dbConnect();

    let result = await data.insert(req.body);

    res.send(result);
})

app.delete("/:id",async(req,res)=>{
    let data = await dbConnect();

    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});

    res.send(result);

})

app.listen(5000);