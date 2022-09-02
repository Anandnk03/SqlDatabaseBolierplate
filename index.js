require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const fs = require('fs');
const path = require('path');
const routesPath = path.join(__dirname, 'routes');
//const Controller = require('./controllers/getmethod');

console.log('Environment:', process.env.APP);
connectDB();

//app.get('/:id', Controller.getMethod);
//routs
fs.readdirSync(routesPath).forEach((file) => {
  const fileName = file;
  const routeName = file.split('.')[0];
  app.use(`/${routeName}s`, require(`./routes/${fileName}`));
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
