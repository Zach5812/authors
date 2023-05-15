// REMEMBER!!
// Think about it:
// model->controller->routes->server.js
// But create it:
// .env->configs->server.js->models->controllers(CRUD)->routes
// Import Dependencies
const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
require("./configs/mongoose.config");


// Configure Express
app.use(cors());
app.use(express.json() );
app.use(express.urlencoded({ extended: true }));

// Routes & Controller logic(CRUD)
const Router = require("./routes/author.routes");
Router(app);


// Listen to the Port
app.listen(8000, ()=>console.log(`Listening to the port: 8000`));