const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const app = express();

//DB config
const db = require('./config/mongoose');

//EJS layouts
app.use(expressLayouts);
app.set('view engine','ejs');

//Routes
app.use('/',require('./routes/api/index'));
app.use('/users',require('./routes/api/users'));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));