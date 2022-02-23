const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');


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

const PORT = process.env.PORT || 4000;

// Use Routes
app.use('/api/users', require('./routes/api/Users'));
app.use('/api/auth', require('./routes/api/Auth'));

// Serve static assets if in prduction
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => `Server running on port ${PORT}`);