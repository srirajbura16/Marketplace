const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

//Config

//Middleware

//Router
app.get('/', (req, res) => {
  res.send('working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
