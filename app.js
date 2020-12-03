const express = require('express');

const app = express();

//DB config
const db = require('./config/mongoose');

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));