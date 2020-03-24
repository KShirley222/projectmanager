const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projectdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Database connection establlished."))
    .catch(err => console.log("There was an error", err))