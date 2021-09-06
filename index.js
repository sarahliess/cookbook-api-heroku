require('dotenv').config();
require('colors');
const express = require('express');

const cors = require('cors')
const server = express();
server.use(cors())

const connectDB = require('./dbinit.js');
const recipes = require('./api/recipes');
//const server = express();
const PORT = process.env.PORT || 5000;

connectDB();

server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Node with Mongo DB'));
server.use('/recipes', recipes);
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));