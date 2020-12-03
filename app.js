const express = require('express');

const app = express();

//DB config
const db = require('./config/mongoose');

//Routes
app.use('/',require('./routes/api/index'));
app.use('/users',require('./routes/api/users'));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));