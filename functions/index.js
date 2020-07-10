
// libraries
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});

//initialize firebase inorder to access its services
admin.initializeApp();

// import routes
const userRoutes = require('./routes/user');

// initialize express server
const server = express();
server.use(cors, bodyParser.json());

// routes
server.use('/user', userRoutes);

// error route
// server.use((error, req, res, next) => {
//     const status = error.statusCode || 500;
//     const message = error.message;
//     const data = error.data;
//     res.status(status).json({ message: message, data: data });
// });

//define google cloud function name
exports.api = functions.https.onRequest(server);

// triggers
exports.newUserSignup = functions.auth.user().onCreate(user => {

    const userMinPromise = admin.firestore().collection('usersMin').doc(user.uid).set({
        email: user.email
    });

    const userMaxPromise = admin.firestore().collection('usersMax').doc(user.uid).set({
        email: user.email
    });

    const promises = [userMinPromise, userMaxPromise]

    return Promise.all(promises);
})

exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
})

// exports
// exports.auth = require('./auth');