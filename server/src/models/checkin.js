const mongoose = require('mongoose')

const { Schema } = mongoose

const Checkin = new Schema({
  venueId: { type: String, required: true },
  checkins: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  versionKey: false
})

Checkin.statics.findOrCreate = require('find-or-create')

class CheckinClass {
  toggleCheckin(userId, cb) {
    const index = this.checkins.indexOf(userId)
    if (index < 0) {
      this.checkins = [...this.checkins, userId]
    } else {
      this.checkins.splice(index, 1)
    }
    this.save((error, checkin) => (error ? cb(error) : cb(null, checkin)))
  }
}

Checkin.loadClass(CheckinClass)

module.exports = mongoose.model('Checkin', Checkin)
