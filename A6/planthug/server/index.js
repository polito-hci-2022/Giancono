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



// CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true,
};
app.use(cors(corsOptions));




/*** APIs ***/
// POST /api/addPlant/
app.post('/api/addPlant/:user', async(req, res) => {
    let x;
    try{
        x = await daoDB.connectPlantUser();
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


// activate the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });