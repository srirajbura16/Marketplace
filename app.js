const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

//Config
require('./config/db');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
