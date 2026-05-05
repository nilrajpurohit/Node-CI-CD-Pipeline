import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME} version ${process.env.APP_VERSION}`);
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} is running at ${process.env.APP_URL}`);
});