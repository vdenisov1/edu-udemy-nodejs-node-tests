const db = require('./db');

module.exports.handleSignup = (email, password) => {
    /*
        1. Check if email already exists.
        2. Save the user to the database.
        3. Send the welcome email.
    */
    db.saveUser({ email, password });
};