const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = process.env.port || 5000;
dotenv.config({ path: './config/config.env' });
const app = express();

app.use(cors());

connectDB();
app.use(express.json());
app.use('/api/v1/user', require('./routes/user'));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
