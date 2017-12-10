const express = require('express')
const venues = require('../controllers/venues')

const router = express.Router()

router.post(
  '/search',
  venues.search
)

router.put(
  '/:venueId/:checkinId',
  venues.toggleCheckin,
  venues.getCheckin
)

module.exports = router
