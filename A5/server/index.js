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
  origin: 'http://192.168.227.65:19000',
  credentials : true,
};
app.use(cors(corsOptions));




/*** APIs ***/
// GET /api/addPlant/
app.post('/api/addPlant', async(req, res) => {
    let x;
    try{
        x = await daoDB.connectPlantUser();
    }catch(err){
        return res.status(500).json({err:'generic error'})
    }
    return res.status(201).json({});
});


// activate the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });