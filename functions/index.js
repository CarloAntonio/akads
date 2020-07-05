
// libraries
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//initialize firebase inorder to access its services
admin.initializeApp();

// import routes
const userRoutes = require('./routes/user');

//initialize express server
const server = express();
server.use(cors(), bodyParser.json());

// routes
server.use('/user', userRoutes);

//define google cloud function name
exports.api = functions.https.onRequest(server);