// const express = require('express');
// const app = express();

// // Home route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);

MONGOURI= mongodb//localhost:27017