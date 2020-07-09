
// libraries
const admin = require('firebase-admin');
const db = admin.firestore();

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
        console.log("Error adding user");
        if (!err.statusCode) err.statusCode = 500;
        return next(err);
    }

    return null;
}