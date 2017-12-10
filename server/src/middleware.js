const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')

const middleware = [
  morgan('tiny'),
  cors(),
  expressSession({
    secret: process.env.EXPRESS_SESSION,
    resave: false,
    saveUninitialized: false
  }),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  passport.initialize(),
  passport.session(),
  express.static(path.join(__dirname, '../../client/build'))
]

module.exports = middleware
