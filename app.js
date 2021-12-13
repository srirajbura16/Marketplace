const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const passport = require('passport');

//Config
require('./config/db');

//Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
