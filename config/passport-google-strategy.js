const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const crypto = require('crypto');

// Load User model
const User = require('../models/User');

passport.use(
  new GoogleStrategy({
  //options for google strategy
  callbackURL:'/auth/google/callback',
  clientID:'keys.google.clientID',
  clientSecret:'keys.google.clientSecret'

  },(accessToken,refreshToken,profile,done) => {
    // passport callback function
    console.log('passport callback function fired');
    console.log(profile);
    //new User()
  })
)

module.exports = passport;

