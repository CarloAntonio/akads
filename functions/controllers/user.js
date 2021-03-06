
// libraries
const admin = require('firebase-admin');
const db = admin.firestore();
const storage = admin.storage();
const fetch = require('node-fetch');

exports.getUserData = async (req, res, next) => {
    // extract body data
    const uid = req.body.uid;

    // pull up data from db
    try {
        const doc = await db.collection('usersMax').doc(uid).get();
        if (doc.exists) {
            const user = doc.data();
            return res.status(200).json(user);
        }
    } catch(err){
        console.log("Error Getting User");
        if (!err.statusCode) err.statusCode = 500;
        return next(err);
    }

    return null;
}

exports.updateUserData = async (req, res, next) => {
    // extract body data
    const user = req.body.user;
    const uid = req.body.uid;
        
    try {
        // update min user data
        if(user && user.name && user.name.value)
            await db.collection('usersMin').doc(uid).update({ name: user.name.value });

        // update max user data
        await db.collection('usersMax').doc(uid).set(user);

        // get freshest user data
        const doc = await db.collection('usersMax').doc(uid).get();
        const updatedUser = doc.data();
        return res.status(200).json(updatedUser);
    } catch(err){
        console.log("Error Updating User");
        if (!err.statusCode) err.statusCode = 500;
        return next(err);
    }
}

exports.uploadProfilePic = async (req, res, next) => {
    // extract body data
    const base64String = req.body.base64String;
    const uid = req.body.uid;

    try {
        // update min user data
        await db.collection('usersMin').doc(uid).update({ base64ProfilePic: base64String });

        // update max user data
        await db.collection('usersMax').doc(uid).update({ base64ProfilePic: base64String });

        // get freshest user data
        const doc = await db.collection('usersMax').doc(uid).get();
        const updatedUser = doc.data();
        return res.status(200).json(updatedUser);
    } catch(err){
        console.log("Error Updating User");
        if (!err.statusCode) err.statusCode = 500;
        return next(err);
    }
}