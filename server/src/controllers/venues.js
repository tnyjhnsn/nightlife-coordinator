const Checkin = require('../models/checkin')
const axios = require('axios')

const yelpQuery = {
  url: 'https://api.yelp.com/v3/graphql',
  method: 'post',
  headers: {
    'Content-Type': 'application/graphql',
    Authorization: (`Bearer ${process.env.YELP_TOKEN}`)
  }
}

module.exports = {

  async search(req, res) {
    yelpQuery.data = req.body.query
    await axios(yelpQuery)
      .then(async (response) => {
        const venues = response.data.data.search.business
        const venueCheckins = await venues.map(async (venue) => {
          const query = Checkin.findOne({ venueId: venue.id }).populate('checkins')
          const checkin = await query.exec()
          return checkin ? { ...venue, checkins: checkin.checkins } : venue
        })
        const vc = await Promise.all(venueCheckins)
        res.status(200).send(vc)
      })
      .catch((error) => {
        res.send(error)
      })
  },

  async toggleCheckin(req, res, next) {
    const { venueId, checkinId } = req.params
    await Checkin.findOrCreate({ venueId }, { venueId })
      .then((response) => {
        const checkin = response.doc
        checkin.toggleCheckin(checkinId, (error) => {
          if (error) {
            res.status(400).send('Cannot toggle checkin')
          }
          next()
        })
      })
  },

  async getCheckin(req, res) {
    const { venueId } = req.params
    await Checkin.findOne({ venueId })
      .populate('checkins')
      .exec((error, checkin) => {
        if (error) {
          return res.status(400).send('Cannot get checkin')
        }
        return res.status(200).send(checkin)
      })
  }
}
