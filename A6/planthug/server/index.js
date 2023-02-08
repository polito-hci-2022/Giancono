'use strict';

// Imports
const express = require('express');
const morgan = require('morgan');



const cors = require('cors');


// Init express
const app = new express();
const port = 3001;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

const db = require('./DB');

const dao = require('./dao');
const daoDB = new dao(db.db);

app.use(cors());


/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
    next();
  });
*/



/*** APIs ***/
// POST /api/addPlant/
app.post('/api/addPlant', async(req, res) => {
    let x;
    try{
        x = await daoDB.addPlantUser(req.body.name, req.body.id, req.body.photo);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(201).json({});
});

app.get('/api/getUP/:user', async(req, res) => {
    let x;
    
    try{
        x = await daoDB.getUserPlants(req.params.user);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(200).json(x);
});

app.get('/api/getP', async(req, res) => {
    let x;
    
    try{
        x = await daoDB.getPlants();
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    //res_object.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json(x);
});

app.get('/api/getPN/:id', async(req, res) => {
    let x;
    
    try{
        x = await daoDB.getPlantID(req.params.id);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(200).json(x);
});

app.get('/api/getUPN/:id', async(req, res) => {
    let x;
    
    try{
        x = await daoDB.getUPlantID(req.params.id);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(200).json(x);
});

app.delete('/api/deletePN/:id', async (req, res) => {
    try {
        await daoDB.deleteUserPlant(req.params.id);
    } catch (err) {
        return res.status(500).json({err: 'generic error'});
    }
    return res.status(200).json({ message: 'Plant deleted successfully' });
});

app.put(`/api/updatePlant`, async(req, res) => {
    
    let x;
    try{
        x = await daoDB.updateUP(req.body.id, req.body.w, req.body.r, req.body.f)
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(201).json({});
});

app.get('/api/getThreads', async(req, res) => {
    let x;
    
    console.log(req.headers)
    try{
        x = await daoDB.getThreads();
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(200).json(x);
});


app.get(`/getThreads`, async(req, res) => {
    let x;
    
    try{
        x = await daoDB.getThreads();
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(200).json(x);
});

app.post(`/api/createthread`, async(req, res) => {
    let x;


    try{
        x = await daoDB.createThread(req.body.author, req.body.title, req.body.category, req.body.body);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(201).json({});
});

app.post(`/api/addReply`, async(req, res) => {
    let x;


    try{
        x = await daoDB.addReply(JSON.stringify(req.body.replies), req.body.id)
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(201).json({});
});


app.get(`/api/getReplies/:id`, async(req, res) => {
    let x;
    
    try{
        x = await daoDB.getReplies(req.params.id);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(200).json(x);
});

app.delete(`/api/deletePost/:id`, async(req, res) => {
    let x;
    
    try{
        x = await daoDB.deletePost(req.params.id);
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(204).json(x);
});


// activate the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });