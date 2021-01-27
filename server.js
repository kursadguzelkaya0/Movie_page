const express = require('express');
const config = require('config');
const mongoose = require('mongoose');


const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// connect mongoose
mongoose.connect(db, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Mongo DB is connected...'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 5000;

// Use Routes
app.use('/api/users', require('./routes/api/Users'));
app.use('/api/auth', require('./routes/api/Auth'));

app.listen(PORT, () => `Server running on port ${PORT}`);