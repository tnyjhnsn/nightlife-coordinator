const express = require('express')
const twitter = require('../auth/twitter')
const github = require('../auth/github')
const user = require('../controllers/user')

const router = express.Router()

/* eslint-disable */

const callback = (req, res) => {
  const user = req.user.doc
  res.redirect(`/success/${user._id}`)
}

router.get(
  '/user/:userId',
  user.getUser
)

router.get(
  '/twitter',
  twitter.authenticate('twitter')
)

router.get(
  '/twitter/callback',
  twitter.authenticate('twitter', { failureRedirect: '/auth/fail' }),
  callback
)

router.get(
  '/github',
  github.authenticate('github', { scope: ['user:email'] })
)

router.get(
  '/github/callback',
  github.authenticate('github', { failureRedirect: '/auth/fail' }),
  callback
)

module.exports = router
