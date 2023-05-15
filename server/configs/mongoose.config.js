const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbName = "authdb"
const uri = `mongodb+srv://${username}:${pw}@cluster0.1idv5d9.mongodb.net/${dbName}?retryWrites=true&w=majority`

console.log(uri)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));