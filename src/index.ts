import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME} version ${process.env.APP_VERSION}`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/env', (req, res) => {
  res.json({
    appName: process.env.APP_NAME,
    appVersion: process.env.APP_VERSION,
    appUrl: process.env.APP_URL
  });
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} is running at ${process.env.APP_URL}`);   
});