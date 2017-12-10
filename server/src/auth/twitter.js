const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy
const User = require('../models/user')

passport.serializeUser((user, fn) => {
  fn(null, user)
})

/* eslint-disable */
passport.deserializeUser((id, fn) => {
  User.findOne({ _id: id.doc._id }, (err, user) => {
    fn(err, user)
  })
})

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_ID,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK
}, (token, tokenSecret, profile, cb) => {
  const userId = profile.id
  const name = profile.displayName
  const { provider } = profile
  User.findOrCreate(
    { userId, provider },
    { name, userId, provider },
    { upsert: true },
    (error, user) => ((error) ? cb(error) : cb(null, user))
  )
}))

module.exports = passport
