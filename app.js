const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const app = express();

const flash = require('connect-flash');

const session = require('express-session');

const passport = require('passport');

const passportSetup = require('./config/passport-google-strategy');

// Passport Config
require('./config/passport')(passport);

//DB config
const db = require('./config/mongoose');

//EJS layouts
app.use(expressLayouts);
app.set('view engine','ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/',require('./routes/api/index'));
app.use('/users',require('./routes/api/users'));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));