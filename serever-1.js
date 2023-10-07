const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
    try {
      const shouts = await db('shouts');
      res.status(200).json({ messageOfTheDay: process.env.MOTD, shouts });  
    } catch(err) {
      console.error('\nERROR', error);
      res.status(500).json({ error: 'Cannot retrieve the shouts' });  
    }
});

server.post('/', async (req, res) => {
    
})


module.exports = server;