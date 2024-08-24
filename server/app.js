require('dotenv').config();
require('express-async-errors');
const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app); // Create an HTTP server
const cors = require('cors');
const notFound = require('./Middlewares/notFound');
const errorHandlerMiddleware = require('./Middlewares/errorHandlerMiddleware');

//-------------------middlewares-----------------
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

//routes


//errors
app.use(notFound);
app.use(errorHandlerMiddleware);

//connection
const PORT = process.env.port || 5000;

const start = async () => {
    try {
        // Use the server instance to listen for incoming connections
        server.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();