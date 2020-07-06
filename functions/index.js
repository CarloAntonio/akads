
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

// initialize express server
const server = express();

// Automatically allow cross-origin requests
server.use(cors({ origin: true }));
server.use(bodyParser.json());

// authentication middlewares
// TODO:

// cors
// server.use((req, res, next) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// routes
server.use('/user', userRoutes);

//define google cloud function name
exports.api = functions.https.onRequest(server);

// triggers
exports.newUserSignup = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).set({
        email: user.email
    })
})

exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
})

// exports
// exports.auth = require('./auth');