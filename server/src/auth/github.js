const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const User = require('../models/user')

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK
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
