const mongoose = require('mongoose')

const { Schema } = mongoose

const User = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  provider: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
}, {
  versionKey: false
})

User.statics.findOrCreate = require('find-or-create')

module.exports = mongoose.model('User', User)
