const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/mongoose.config')
connectDB();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./routes/user.route')(app)
app.listen(5000, () => console.log('Listening on port 8000'))