require('dotenv').config();
const express = require('express');
const server = express();
const server = require('./api/server.js');
server.use(express.json());

server.get('/hello', (req, res) => {
  res.json('hello, there');
});

server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});

const port = process.env.PORT;
port=9001

server.listen(9001, () => {
  console.log('\n*** Server Running on http://localhost:${port} ***\n');
});

server.listen(9000, () => {
  console.log("\n*** Server Running on http://localhost:${port} ***\n");
});
