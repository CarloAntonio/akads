
// libraries
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// triggers
exports.newUserSignup = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('usersMin').doc(user.uid).set({
        email: user.email
    })
})

exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
})