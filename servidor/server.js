const express = require('express');
const conectDB = require('./config/db');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

conectDB();

app.use(cors());

app.use( express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/users', require('./routes/users') );
app.use('/api/auth', require('./routes/auth') );
app.use('/api/budget', require('./routes/budget') );

app.listen(PORT, () => {
    console.log(`Server ON | Port ${PORT}`)
})