const mongoose = require('mongoose');

//mongoose.connect(`mongodb://127.0.0.1/ERS`);

mongoose.connect('mongodb+srv://harshalsgore:YLWXQoTvv7T5RphA@cluster0.uucjlco.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to MongoDB"));

db.once('open', function(){
    console.log("Connected to Database :: MongoDB")
});

module.exports = db