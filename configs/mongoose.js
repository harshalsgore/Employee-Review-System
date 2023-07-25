const mongoose = require('mongoose');

//mongoose.connect(`mongodb://127.0.0.1/ERS`);

mongoose.connect('mongodb+srv://harshalsgore:YLWXQoTvv7T5RphA@cluster0.uucjlco.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connecting to db'));

db.once('open', function(){
    console.log("Connected to db")
});

module.exports = db